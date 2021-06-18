import React from "react";
import "./checkoutStyles.scss";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cartSelectors"
import CheckoutItem from "../../components/checkoutItem/checkoutItemComponent";
import CartItem from "../../components/cartItem/cartItemComonent";
import StripeCheckoutButton from "../../components/stripe-button/stripeButtonComponent"

const CheckoutPage = ({cartItems,cartTotal})=>{
    return <div className="checkout-page">
              <div className="checkout-header">
                <div className="checkout-block">
    <span>Product</span>
    </div>
    <div className="checkout-block">
    <span>Description</span>
    </div>
    <div className="checkout-block">
    <span>Quantity</span>
    </div>
    <div className="checkout-block">
    <span>Price</span>
    </div>
    <div className="checkout-block">
    <span>Remove</span>
    </div>
    </div>
    {cartItems.map(cartItem=><CheckoutItem key={CartItem.id} cartItem={cartItem}/>)}
    <div>
    <span className="total" >TOTAL: ${cartTotal}</span>
    </div>
    <StripeCheckoutButton price={cartTotal} />
    </div>
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    cartTotal:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);