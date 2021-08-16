import Login from "./Login";
import React, { useState } from 'react';
import VerifyOtp from "./VerifyOtp";
import Dashboard from "./Dashboard";
import {  Redirect, Route, Switch } from "react-router-dom";

function AppContainer() {
    const [isLogin, changeLogin] = useState(false);
    function toggleLogin(){
        changeLogin(!isLogin);
    }
    return (
        <div>
            <Switch>

                <Route path="/" exact render={()=><Login togglelogin={toggleLogin} />} />
                <Route path="/verify" render={()=>{
                   return isLogin?<VerifyOtp />:<Redirect to="/" from="/verify" />
                }} />
                <Route path="/dashboard" render={()=>{
                   return isLogin?<Dashboard togglelogin={toggleLogin}/>:<Redirect to="/" from="/dashboard" />
                }} />
                
            </Switch>
            
        </div>
  );
}

export default AppContainer;