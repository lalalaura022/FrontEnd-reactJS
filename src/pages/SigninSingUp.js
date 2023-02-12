import React, { useEffect, useRef, useState } from "react";
import Register2 from "./Register2";
import ButtonSS from './Button';
import './SigninSingUp.css';
import inputReus from './inputReus';
function SignInSignupWithLocalStorage(){
    
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })
   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        let obj = {
            name : name.current.value,
            email : email.current.value,
            password : password.current.value,
        }
        const newPostKey = push(child(ref(database), 'posts')).key;
            const updates = {}
            updates['/' + newPostKey] = obj
            return update(ref(database), updates);
        alert("Account created successfully!!")
        window.location.reload()
      }
   }

   const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword)
    {
        localStorage.setItem("login", true)
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }
   
    return(
        <form>
            {showHome?<Register2/>:
            (show?
                <div className="container">
                    <inputReus className={"menuInput"} style={{ backgroundColor: "white", color: "purple" }} id={"searchText"} type={"text"} placeholder={"Search..."}  ></inputReus>
                        <h1>Hello {localName}</h1>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <ButtonSS onClick={handleSignIn} style={{ padding: "10px 20px", borderRadius: "5px" }}>
                        Sign In!     </ButtonSS>
                        {/* <button onClick={handleSignIn}>Sign In</button> */}
                </div>
                :
                <div className="container">
                    <inputReus className={"menuInput"} style={{ backgroundColor: "white", color: "white" }} id={"searchText"} type={"text"} placeholder={"Search..."}  ></inputReus>
                        <div className="input_space">
                            <input placeholder="Name" type='text' ref={name} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <ButtonSS onClick={handleClick} style={{ padding: "10px 20px", borderRadius: "5px" }}>
                        Sign Up!     </ButtonSS>
                        {/* <button onClick={handleClick}>Sign Up</button> */}
                </div>)
            }
        </form>
    );
}
export default SignInSignupWithLocalStorage;