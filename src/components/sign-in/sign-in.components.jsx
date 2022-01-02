import React, {useState} from "react";

import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.components";

import {auth, signInWithGoogle} from "../../firebase/firebase.utils"

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChange = (event) => {
        const {value, name} = event.target

        switch (name){
            case "password" :
                setPassword(value);
                break
            default :
                setEmail(value);
                break
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail("")
            setPassword("")
        } catch (error) {
            console.error(error);            
        }
    }

    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={(event) => handleSubmit(event)}>
                <FormInput label="Email" type="email" handleChange={(event) => handleChange(event)} name="email" required value={email} />
                <FormInput label="Password" type="password" handleChange={(event) => handleChange(event)} name="password" required value={password}/>

                <div className="button">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    )    
}

export default SignIn;