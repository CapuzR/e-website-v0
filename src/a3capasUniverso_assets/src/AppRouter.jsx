import React from 'react';

  import Home from './home/home';
  import  Profile from './profile/profile';
//   import  Explore from './explore/explore';
  import {
    Switch,
    Route,
    Link
  } from "react-router-dom";


const AppRouter = (props)=> {
    return (
            <div>
                <Switch>
                    <Route path="/profile">
                        <Profile identity={props.identity} setLoading={props.setLoading}/>
                    </Route>
                    {/* <Route path="/explore">
                        <Explore />
                    </Route> */}
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
    );
}


export default AppRouter;