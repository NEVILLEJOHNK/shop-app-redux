import React from "react";
import "./cart-dropDown.styles.scss";
import CustomButton from "../custom-button/custom-button.component"
import {connect} from "react-redux";
import CartItem from "../cartItem/cartItemComonent";
import {selectCartItems, selectCartItemsCount} from "../../redux/cart/cartSelectors";
import {withRouter} from "react-router-dom";
import {toggleCartHidden} from "../../redux/cart/cartAction";



const CartDropDown = ({cartItems,history,dispatch})=>{
    return <div className="cart-dropdown">
   
    <div className="cart-items">
{
    cartItems.length 
    ? cartItems.map(item=><CartItem key={item.id} item={item}/>)
    :<span className="empty-message" >Your Cart is Empty</span>
}

  </div>

   { cartItems.length 
    ? <CustomButton onClick={()=>{history.push("/checkout");dispatch(toggleCartHidden())}} >CHECKOUT</CustomButton>
    : null
    }
   
    </div>   
}

const mapStateToProps = (state) => ({cartItems:selectCartItems(state)})

export default withRouter(connect(mapStateToProps)(CartDropDown))