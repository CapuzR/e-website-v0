import {StoicIdentity} from "ic-stoic-identity";
import { Principal } from '@dfinity/principal';
import { createActor as fMCreateActor } from "../../declarations/fm/index";
import { createActor as wPCreateActor } from "../../declarations/wp/index";
import { canisterId } from "../../declarations/a3capasUniverso_assets/index";
import { to32bits } from './utils/number';
import account, { getAccountId } from './utils/account';
import { Principal } from '@dfinity/principal';
import { idlFactory }  from '../../declarations/wp/wp.did.js';

const host = "https://localhost:8080";
const whitelist = [canisterId, 'wrcb3-5qaaa-aaaal-qaahq-cai', 'k4qsa-4aaaa-aaaah-qbvnq-cai'];

const profileData = [{
  bio: {
    givenName: [],
    familyName: [],
    username: [],
    displayName: [],
    location: [],
    about: [],
    email: [],
    phone: [],
    socials: [{
      deSo: [{
        distrikt: [],
        dscvr: [],
        openChat: [],
      }],
      ceSo: [{
        discord: [],
        twitter: [],
        instagram: [],
        facebook: [],
        tiktok: [],
      }]
    }]
  }
}];

export default {
    onSignInStoic,
    onSignOutStoic,
    onSignInPlug,
    getOwnedTokens,
    isAuth,
    verifyConnectionAndAgent,
    profileData,
    getProfileData,
    updateProfileData,
    wPActor,
    createProfileData
};

async function updateProfileData(profileData, wallet) {
  let identity;
  let actor;
  if(wallet == 'Stoic') {
    identity = await onSignInStoic();
    actor = await wPActor(identity);
  } else {
    identity = await verifyConnectionAndAgent(whitelist, host);
    actor = await wPActorPlug();
  }
  
  let result = await actor.updateProfile(profileData);
  
  if(result.ok) {
    return true;
  } else {
    return false;
  }
};

async function createProfileData(profileData, wallet) {
  let identity;
  let actor;
  if(wallet == 'Stoic') {
    identity = await onSignInStoic();
    actor = await wPActor(identity);
  } else {
    identity = await verifyConnectionAndAgent(whitelist, host);
    actor = await wPActorPlug();
  }
  let result = await actor.createProfile(profileData);
  
  if(result.ok) {
    return true;
  } else {
    return false;
  }
}

async function wPActor(identity){
  return await wPCreateActor('wrcb3-5qaaa-aaaal-qaahq-cai', {
    agentOptions: {
      host: 'https://' + 'wrcb3-5qaaa-aaaal-qaahq-cai' + '.ic0.app',
      identity: identity
    }
  })
};

async function wPActorPlug(){
  return await window.ic.plug.createActor({
    canisterId: 'wrcb3-5qaaa-aaaal-qaahq-cai',
    interfaceFactory: idlFactory
  })
};

async function getProfileData(wallet) {
  let identity;
  let actor;
  if(wallet == 'Stoic') {
    identity = onSignInStoic();
    actor = await wPActor(identity);
  } else {
    identity = await verifyConnectionAndAgent(whitelist, host);
    actor = await wPActorPlug();
  }

  return await actor.readProfile();

};

async function isAuth(){
    StoicIdentity.load().then(async identity => {
      if (identity != false) {
        return true;
      } else {
        return false;
      }
    });
};

async function getOwnedTokens(identity, wallet) {

  const loggedActor = await fMCreateActor('k4qsa-4aaaa-aaaah-qbvnq-cai', {
    agentOptions: {
      host: 'https://' + 'k4qsa-4aaaa-aaaah-qbvnq-cai' + '.ic0.app',
      principal: wallet == 'Stoic' ? Principal.fromText(JSON.parse(localStorage.getItem('_scApp')).principal) : await window.ic.plug.getPrincipal(),
    },
  });
  const accountId = getAccountId(wallet == 'Stoic' ? Principal.fromText(JSON.parse(localStorage.getItem('_scApp')).principal) : await window.ic.plug.getPrincipal());

  const userTokenIndexes = await loggedActor.tokens(accountId);
  
  if(!userTokenIndexes.err) {
    const userTokenIds = userTokenIndexes.ok.map((i)=> {
      return {
        tokenIndex: i,
        tokenId: getTokenIdentifier('k4qsa-4aaaa-aaaah-qbvnq-cai', i)
      }
    });
    
    return userTokenIds;
  } else {
    return false;
  }
}

async function onSignInStoic() {
    const identity = await StoicIdentity.load();
    if (identity !== false) {
      return identity;
    } else {
      const identity = await StoicIdentity.connect();
      return identity;
    }
  };

async function onSignOutStoic() {
  const identity = await StoicIdentity.load();
  if (identity !== false) {
    StoicIdentity.disconnect();
    return true;
  } else {
    return false;
  }
};

async function onSignInPlug(whitelist, host) {

  const isConnected = await window.ic.plug.requestConnect({
    whitelist: whitelist
  });
  if(isConnected) {
    // Get the user principal id
    return isConnected;
  } else {
    return false;
  }
};

async function verifyConnectionAndAgent(whitelist, host) {
  const connected = await window.ic.plug.isConnected();
  if (!connected) window.ic.plug.requestConnect({ whitelist: whitelist });
  if (connected && !window.ic.plug.agent) {
    await window.ic.plug.createAgent({ whitelist })
  }
};

async function onSignOutPlug() {
const identity = await StoicIdentity.load();
if (identity !== false) {
  StoicIdentity.disconnect();
  return true;
} else {
  return true;
}
};

const getTokenIdentifier = (canister, index) => {
  const padding = Buffer.from('\x0Atid');
  const array = new Uint8Array([
    ...padding,
    ...Principal.fromText(canister).toUint8Array(),
    ...to32bits(index),
  ]);
  return Principal.fromUint8Array(array).toText();
};