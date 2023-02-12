import React from "react";
import './SigninSingUp.css';
import ButtonSS from './Button';
import SignInSignupWithLocalStorage from './SigninSingUp';
function reg(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        localStorage.setItem("login", false)
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <div>
           {/* {localStorage.getItem('name')} */}
            <h1>Home Page </h1>
            <p>Wellcome </p>
            <ButtonSS onClick={logout} style={{ padding: "10px 20px", borderRadius: "5px" }}> Logout! </ButtonSS>
        <ButtonSS onClick={deleteAccount} style={{ padding: "10px 20px", borderRadius: "5px" }}>
        Delete!     </ButtonSS>

        {/* <SignInSignupWithLocalStorage/> */}
            {/* <button onClick={logout} className="logout">LogOut</button>
            <button onClick={deleteAccount} className="delete">Delete</button> */}
        </div>
  
   );
}
export default reg;