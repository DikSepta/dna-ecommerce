import React from "react";

import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.components";

import {auth, signInWithGoogle} from "../../firebase/firebase.utils"

class SignIn extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password} = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email:"",
                password:""
            }, ()=>console.log(this.state));
        } catch (error) {
            console.error(error);            
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({[name]:value});
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Email" type="email" handleChange={this.handleChange} name="email" required value={this.state.email} />
                    <FormInput label="Password" type="password" handleChange={this.handleChange} name="password" required value={this.state.password}/>

                    <div className="button">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )

    }

}

export default SignIn;