import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import crwn from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_FeIq2tW29up8WL3zieRvw51000XsmDgWD4';

    const onToken = token => {
        console.log(token);
        alert("Payment Successfully")
    }

    return (
        <StripeCheckout 
            label="Pay now"
            name="CRWN CLOTHING Ltd."
            billingAddress
            shippingAddress
            image={crwn}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;