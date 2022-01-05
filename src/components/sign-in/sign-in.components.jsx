import React from "react";

import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.components";

import {auth, signInWithGoogle} from "../../firebase/firebase.utils"
import { googleSignInStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import { emailSignInStart } from "../../redux/user/user.actions";

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

        const {emailSignInStart} = this.props;
        const {email, password} = this.state;
        
        emailSignInStart(email, password);
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({[name]:value});
    }

    render(){
        const {googleSignInStart} = this.props;

        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Email" type="email" handleChange={this.handleChange} name="email" required value={this.state.email} />
                    <FormInput label="Password" type="password" handleChange={this.handleChange} name="password" required value={this.state.password}/>

                    <div className="button">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )

    }

}

const mapDispatchToProps = dispatch => ({
    emailSignInStart : (email,password) => dispatch(emailSignInStart({email, password})),
    googleSignInStart : () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);