import React from 'react';
import BMC from "../BMC.jpg"
import axios from "axios";
import config from '../utils/appconfig';
import { Redirect, useHistory } from 'react-router-dom';
const VerifyOtp = (props) => {
    const history = useHistory();
    let [isOtpDisabled, changeOtpDisabled] = React.useState(true);
    const phoneInput = React.useRef();
    const otpInput = React.useRef();
    function submitPhoneForOtpVerification() {
        console.log("Submit phone call");
        let currentPhoneNumber = phoneInput.current.value;
        console.log(currentPhoneNumber);
        if(currentPhoneNumber.length == 10 && !isNaN(parseInt(currentPhoneNumber))){
            axios.post(config.serverUrl.generateOtp, {
                "phone": currentPhoneNumber
            }).then((response) => {
                if (response.data.isotpgenerated) {
                    changeOtpDisabled(false);
                }
            }).catch((err) => {
                alert("error in otp generation")
            })
        }
        else{
            alert("please enter phone number");
        }
    }
    function verifyOtp(){
        let otp = otpInput.current.value;
        if(otp.length==4 && !isNaN(parseInt(otp))){
            axios.post(config.serverUrl.validateOtp,{
                "otp":otp
            })
            .then((response)=>{
                if(response.data.isOtpValid){
                    history.push("/dashboard");
                }
                else{
                    if(response.data.isOtpInvalid){
                        alert("Invalid OTP");
                    }
                }
            })
            .catch((err)=>{
                console.log("err");
            })
        }
        else{
            alert("Enter valid otp")
        }
    }
    return (
        <>
            <div className="row otp-head">
                <h2>Verify OTP</h2>
                <img src={BMC} alt="Brain Mentors Circular Logo" />
            </div>
            <div className="otp-body row">
                <div className="phone">

                    <label for="phone">Enter Phone:</label>
                    <input ref={phoneInput} type="text" id="phone"></input>
                    <input type="submit" id="phone" onClick={submitPhoneForOtpVerification} />
                </div>

                <div className="otp-div">
                    <label for="otp">Enter Otp:</label>
                    <input ref={otpInput} type="text" disabled={isOtpDisabled} id="otp"></input>
                    <input type="submit" disabled={isOtpDisabled} value="Verify" onClick={verifyOtp}/>
                </div>
            </div>
        </>
    )
}
export default VerifyOtp;