import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import crwn from "../../assets/crown.svg";
import { Helmet } from "react-helmet";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_FeIq2tW29up8WL3zieRvw51000XsmDgWD4";

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CRWN Clothing - Stripe Payment</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
    </>
  );
};

export default StripeCheckoutButton;
