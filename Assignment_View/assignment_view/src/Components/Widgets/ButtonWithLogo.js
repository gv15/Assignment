import React from 'react';
const Button = (props)=>{
    return(
        <div>
            <button id={props.id} className="logobtn" onClick={props.click}>
                Login with <span className={props.logo}></span>
            </button>
        </div>
    )
}
export default Button;