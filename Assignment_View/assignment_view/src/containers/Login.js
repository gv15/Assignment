import React from 'react';
import Button from '../Components/Widgets/ButtonWithLogo';
import BMR from "../BMR.jpg"
import firebaseAuth from '../utils/firebase/firebase';
import "firebase/auth";
import config from '../utils/appconfig';
import axios from 'axios';
import "../main.css";
import { useHistory } from 'react-router-dom';
const Login = (props)=>{
    const history = useHistory();
    function handleLogin(event){
     
        firebaseAuth.startPopUpAuthentication(event.target.id)
        .then((result)=>{
            console.log(result);
            let data = {
                uname:result.additionalUserInfo.profile.given_name+result.additionalUserInfo.profile.family_name,
                email:result.additionalUserInfo.profile.email
            }
            axios.post(config.serverUrl.login,data).
            then((response)=>{
                //console.log(props.history)
               if(response.data.isPhoneVerified ){
                    props.togglelogin()
                   history.push("/dashboard");
               }
               else{
                    props.togglelogin();
                    history.push("/verify");
               }
            }).catch((err)=>{
                console.log(err);
            })
        })
        .catch((err)=>{
            alert(`Some error in ${event.target.id} authentication`);
            console.log("Error in auth",err);
        });
    }
    return(
        <div>
            <div className="row login">
                <h2 id="heading">Welcome to</h2>
                <img src={BMR} alt="Logo Missing" />
            </div>
            <div className="buttons-container row">
                <Button id="google" logo="fa fa-google" click={handleLogin}/>
                <Button id="facebook" logo="fa fa-facebook" click={handleLogin}/>
            </div>
        </div>
    )
}
export default Login;