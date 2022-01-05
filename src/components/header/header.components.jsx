import React from 'react'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'

import './header.styles.scss'
import { ReactComponent as Logo} from "../../assets/crown.svg"
import CartIcon from '../cart-icon/cart-icon.components'
import CartDropdown from '../cart-dropdown/cart-dropdown.components'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { HeaderContainter, LogoContainer, Options, OptionLink } from './header.styles'
import { signOutStart } from '../../redux/user/user.actions'

const Header = ({currentUser, hidden, signOutStart}) => {

    return (
        <HeaderContainter>
            <LogoContainer to="/">
                <Logo></Logo>
            </LogoContainer>
            <Options>
                <OptionLink to="/Shop">SHOP</OptionLink>
                <OptionLink to="/Contact">CONTACT</OptionLink>
                { currentUser ? 
                (<OptionLink as="div" onClick={signOutStart}>SIGN OUT</OptionLink>):
                (<OptionLink to="/Signin">SIGN IN</OptionLink>)} 
                <CartIcon></CartIcon>               
            </Options>
            {hidden ? null:(<CartDropdown/>)}
        </HeaderContainter>

    )
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);