import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cartAction"
import {selectCartItemsCount} from "../../redux/cart/cartSelectors"

import "./cart-icon.styles.scss";

const CartIcon = (props)=>{
    
   return <div className="cart-icon" onClick={props.toggleCartHidden} >
    <ShoppingIcon className ="shopping-icon"  />
    <span className="item-count">{props.itemCount}</span>
    </div>
}

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

const mapStateToProps = (state)=>{
    return {
        itemCount:selectCartItemsCount(state)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)