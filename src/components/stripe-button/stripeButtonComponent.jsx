import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton =({price})=>{
    const priceForStripe = price
    const publishableKey = "pk_test_51J3MpmSDASwnyb9r8FwcGdDjbqT96qiCVyJERyrhr5aanY5DxQoc6dm1CJUdS2rJCUd0IR9dNjAa4oCEnRdRKhY6002XnXqMJA"

   const onToken = (token)=>{
        console.log(token);
        alert("Payment Successful")
    }

    return (
    <StripeCheckout 
    label="Pay Now"
    name="Pay Neville John "
    billingAddress
    shippingAddress
    description={`Your Totals $${price}`}
    amount={priceForStripe}
    panelLabel="Pay Now"
    token={onToken}
    stripeKey={publishableKey}

    />
)

}

export default StripeCheckoutButton