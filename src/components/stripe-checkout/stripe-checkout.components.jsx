import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51Jics7J6MpSDlE3Wsv8FXWUfyWjpwpiosZGxYo3hwGApWzqpik848oBMYXcUfU02G7zg8YAu1UR5738oxqAR5O5800TQSLMpl2"

    const onToken = token => {
        console.log(token);
        alert('Paymen Succesfull');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name="DNA commerce Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;