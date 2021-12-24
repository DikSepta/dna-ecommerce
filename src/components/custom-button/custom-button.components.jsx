import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

import './custom-button.styles.scss'
const CustomButton = ({children, inverted, isGoogleSignIn , ...otherProps}) => (
    <CustomButtonContainer inverted={inverted} isGoogleSignIn={isGoogleSignIn} {...otherProps}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton;