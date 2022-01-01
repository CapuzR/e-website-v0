import type { Principal } from '@dfinity/principal';
export type AccountIdentifier = AccountIdentifier_2;
export type AccountIdentifier_2 = string;
export type AccountIdentifier_3 = AccountIdentifier;
export interface Asset {
  'thumbnail' : [] | [File],
  'name' : string,
  'payload' : File,
}
export type Balance = bigint;
export type BalanceRequest = BalanceRequest_2;
export interface BalanceRequest_2 { 'token' : TokenIdentifier, 'user' : User }
export type BalanceResponse = BalanceResponse_2;
export type BalanceResponse_2 = Result_9;
export type Balance_2 = Balance;
export type CommonError = CommonError_2;
export type CommonError_2 = { 'InvalidToken' : TokenIdentifier } |
  { 'Other' : string };
export type Extension = Extension_2;
export type Extension_2 = string;
export interface File { 'data' : Array<Array<number>>, 'ctype' : string }
export type HeaderField = [string, string];
export interface HttpRequest {
  'url' : string,
  'method' : string,
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
}
export interface HttpResponse {
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
  'streaming_strategy' : [] | [HttpStreamingStrategy],
  'status_code' : number,
}
export interface HttpStreamingCallbackResponse {
  'token' : [] | [HttpStreamingCallbackToken],
  'body' : Array<number>,
}
export interface HttpStreamingCallbackToken {
  'key' : string,
  'sha256' : [] | [Array<number>],
  'index' : bigint,
  'content_encoding' : string,
}
export type HttpStreamingStrategy = {
    'Callback' : {
      'token' : HttpStreamingCallbackToken,
      'callback' : [Principal, string],
    }
  };
export interface ListRequest {
  'token' : TokenIdentifier_2,
  'from_subaccount' : [] | [SubAccount_3],
  'price' : [] | [bigint],
}
export interface Listing {
  'locked' : [] | [Time],
  'seller' : Principal,
  'price' : bigint,
}
export type Memo = Array<number>;
export type Metadata = Metadata_2;
export type Metadata_2 = {
    'fungible' : {
      'decimals' : number,
      'metadata' : [] | [Array<number>],
      'name' : string,
      'symbol' : string,
    }
  } |
  { 'nonfungible' : { 'metadata' : [] | [Array<number>] } };
export type MintRequest = MintRequest_2;
export interface MintRequest_2 {
  'to' : User,
  'metadata' : [] | [Array<number>],
}
export type Result = { 'ok' : Balance } |
  {
    'err' : { 'CannotNotify' : AccountIdentifier } |
      { 'InsufficientBalance' : null } |
      { 'InvalidToken' : TokenIdentifier } |
      { 'Rejected' : null } |
      { 'Unauthorized' : AccountIdentifier } |
      { 'Other' : string }
  };
export type Result_2 = {
    'ok' : Array<[TokenIndex, [] | [Listing], [] | [Array<number>]]>
  } |
  { 'err' : CommonError };
export type Result_3 = { 'ok' : Array<TokenIndex> } |
  { 'err' : CommonError };
export type Result_4 = { 'ok' : Balance_2 } |
  { 'err' : CommonError };
export type Result_5 = { 'ok' : null } |
  { 'err' : CommonError };
export type Result_6 = { 'ok' : Metadata } |
  { 'err' : CommonError };
export type Result_7 = { 'ok' : AccountIdentifier_3 } |
  { 'err' : CommonError };
export type Result_8 = { 'ok' : [AccountIdentifier_3, [] | [Listing]] } |
  { 'err' : CommonError };
export type Result_9 = { 'ok' : Balance } |
  { 'err' : CommonError_2 };
export interface Settlement {
  'subaccount' : SubAccount_3,
  'seller' : Principal,
  'buyer' : AccountIdentifier_3,
  'price' : bigint,
}
export type SubAccount = SubAccount_2;
export type SubAccount_2 = Array<number>;
export type SubAccount_3 = SubAccount;
export type Time = Time_2;
export type Time_2 = bigint;
export type TokenIdentifier = string;
export type TokenIdentifier_2 = TokenIdentifier;
export type TokenIndex = TokenIndex_2;
export type TokenIndex_2 = number;
export interface Transaction {
  'token' : TokenIdentifier_2,
  'time' : Time,
  'seller' : Principal,
  'buyer' : AccountIdentifier_3,
  'price' : bigint,
}
export type TransferRequest = TransferRequest_2;
export interface TransferRequest_2 {
  'to' : User,
  'token' : TokenIdentifier,
  'notify' : boolean,
  'from' : User,
  'memo' : Memo,
  'subaccount' : [] | [SubAccount],
  'amount' : Balance,
}
export type TransferResponse = TransferResponse_2;
export type TransferResponse_2 = Result;
export type User = { 'principal' : Principal } |
  { 'address' : AccountIdentifier };
export interface _SERVICE {
  'TEMPaddPayment' : (
      arg_0: string,
      arg_1: Principal,
      arg_2: SubAccount_3,
    ) => Promise<undefined>,
  'TEMPusedAddresses' : (arg_0: string) => Promise<
      Array<[AccountIdentifier_3, Principal, SubAccount_3]>
    >,
  'acceptCycles' : () => Promise<undefined>,
  'addAsset' : (arg_0: Asset) => Promise<bigint>,
  'allPayments' : () => Promise<Array<[Principal, Array<SubAccount_3>]>>,
  'allSettlements' : () => Promise<Array<[TokenIndex, Settlement]>>,
  'availableCycles' : () => Promise<bigint>,
  'balance' : (arg_0: BalanceRequest) => Promise<BalanceResponse>,
  'bearer' : (arg_0: TokenIdentifier_2) => Promise<Result_7>,
  'clearPayments' : (arg_0: Principal, arg_1: Array<SubAccount_3>) => Promise<
      undefined
    >,
  'details' : (arg_0: TokenIdentifier_2) => Promise<Result_8>,
  'extensions' : () => Promise<Array<Extension>>,
  'getMinter' : () => Promise<Principal>,
  'getRegistry' : () => Promise<Array<[TokenIndex, AccountIdentifier_3]>>,
  'getTokens' : () => Promise<Array<[TokenIndex, Metadata]>>,
  'http_request' : (arg_0: HttpRequest) => Promise<HttpResponse>,
  'http_request_streaming_callback' : (
      arg_0: HttpStreamingCallbackToken,
    ) => Promise<HttpStreamingCallbackResponse>,
  'list' : (arg_0: ListRequest) => Promise<Result_5>,
  'listings' : () => Promise<Array<[TokenIndex, Listing, Metadata]>>,
  'lock' : (
      arg_0: TokenIdentifier_2,
      arg_1: bigint,
      arg_2: AccountIdentifier_3,
      arg_3: SubAccount_3,
    ) => Promise<Result_7>,
  'metadata' : (arg_0: TokenIdentifier_2) => Promise<Result_6>,
  'mintAndList' : (
      arg_0: AccountIdentifier_3,
      arg_1: [] | [Array<number>],
      arg_2: bigint,
      arg_3: string,
    ) => Promise<TokenIndex>,
  'mintNFT' : (arg_0: MintRequest) => Promise<TokenIndex>,
  'payments' : () => Promise<[] | [Array<SubAccount_3>]>,
  'refunds' : () => Promise<[] | [Array<SubAccount_3>]>,
  'removePayments' : (arg_0: Array<SubAccount_3>) => Promise<undefined>,
  'removeRefunds' : (arg_0: Array<SubAccount_3>) => Promise<undefined>,
  'setMinter' : (arg_0: Principal) => Promise<undefined>,
  'settle' : (arg_0: TokenIdentifier_2) => Promise<Result_5>,
  'settlements' : () => Promise<
      Array<[TokenIndex, AccountIdentifier_3, bigint]>
    >,
  'streamAsset' : (
      arg_0: bigint,
      arg_1: boolean,
      arg_2: Array<number>,
    ) => Promise<undefined>,
  'supply' : (arg_0: TokenIdentifier_2) => Promise<Result_4>,
  'tokens' : (arg_0: AccountIdentifier_3) => Promise<Result_3>,
  'tokens_ext' : (arg_0: AccountIdentifier_3) => Promise<Result_2>,
  'transactions' : () => Promise<Array<Transaction>>,
  'transfer' : (arg_0: TransferRequest) => Promise<TransferResponse>,
  'updateThumb' : (arg_0: string, arg_1: File) => Promise<[] | [bigint]>,
}
