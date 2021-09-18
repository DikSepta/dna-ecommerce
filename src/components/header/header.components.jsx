import React from 'react'
import {Link} from 'react-router-dom'

import './header.styles.scss'
import { ReactComponent as Logo} from "../../assets/crown.svg"

const Header = () => {

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/Shop">SHOP</Link>
                <Link className="option" to="/Contact">CONTACT</Link>
            </div>
        </div>

    )
}

export default Header;