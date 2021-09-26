import React from "react";

import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.components";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss"

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("password did not match");
            return;
        }
        
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName:displayName});   
            
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });
        } catch (error) {
            console.error(error)
        }

    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className="title">I do not have an account</h2>
                <span>Create an account with email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text" 
                        onChange={this.handleChange}
                        name="displayName"
                        label="Display Name"
                        value={displayName}
                        required
                    />
                    <FormInput 
                        type="email" 
                        onChange={this.handleChange}
                        name="email"
                        label="Email"
                        value={email}
                        required
                    />
                    <FormInput 
                        type="password" 
                        onChange={this.handleChange}
                        name="password"
                        label="Password"
                        value={password}
                        required
                    />
                    <FormInput 
                        type="password" 
                        onChange={this.handleChange}
                        name="confirmPassword"
                        label="Confirm Password"
                        value={confirmPassword}
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>

            </div>
        );
    }
}

export default SignUp;