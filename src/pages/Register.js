//import Input from './InputReusableComponent';
import ButtonSS from './Button';
//import  './ComponentStyle/RegistrationStyle.css';
import BackgroundPicture from "./BackgroundPicture";

import React, {useState,setState} from 'react';
import './style.css'
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";



function RegistrationForm() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

 
   
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
      
        
    }
      

        const handleSubmit = () =>{
            console.log("Form submitted");
            let obj = {
                    firstName : firstName,
                    lastName:lastName,
                    email:email,
                    password:password,
                    confirmPassword:confirmPassword,
                }       
        
            const newPostKey = push(child(ref(database), 'posts')).key;
            const updates = {};
            updates['/' + newPostKey] = obj

            return update(ref(database), updates);
        }

        return(
            <div className="form">
                <div className="form-body">
                    <div className="username">
                        <label className="form__label" for="firstName">First Name </label>
                        <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
                    </div>
                    <div className="lastname">
                        <label className="form__label" for="lastName">Last Name </label>
                        <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
                    </div>
                    <div className="email">
                        <label className="form__label" for="email">Email </label>
                        <input  type="email" id="email" className="form__input" placeholder="Email"/>
                    </div>
                    <div className="password">
                        <label className="form__label" for="password">Password </label>
                        <input className="form__input" type="password"  id="password" placeholder="Password"/>
                    </div>
                    <div className="confirm-password">
                        <label className="form__label" for="confirmPassword">Confirm Password </label>
                        <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
                    </div>
                </div>
                <br></br>
                <div style={{ display: "grid", alignItems: "center" }}>
                
                <ButtonSS onClick={handleSubmit()} style={{ padding: "10px 20px", borderRadius: "5px" }}>
        Submit!     </ButtonSS>
        </div>
        <br></br>
        <BackgroundPicture
    backgroundImage="https://cdn.pizap.com/pizapfiles/images/thank_you_card_maker_app01.jpg"
    style={{
      height: "40vh",

    }}
  >
  </BackgroundPicture>
        
            </div>    
              
          )       
          
         
    
}
export default RegistrationForm;