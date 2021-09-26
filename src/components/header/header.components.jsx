import React from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'

import './header.styles.scss'
import { ReactComponent as Logo} from "../../assets/crown.svg"

const Header = ({currentUser}) => {

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/Shop">SHOP</Link>
                <Link className="option" to="/Contact">CONTACT</Link>
                { currentUser ? 
                (<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>):
                (<Link className="option" to="/Signin">SIGN IN</Link>)}                
            </div>
        </div>

    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);