import cartActionType from "./cartActionType";

export const toggleCartHidden=()=>{
    return {
        type:cartActionType.SET_HIDDEN_VALUE
        
    }
}

export const addItem =(item)=>{
    return {
        type:cartActionType.ADD_ITEM,
        payload:item
    }
}

export const clearItemFromCart =(item)=>{
    return {
        type: cartActionType.CLEAR_ITEM_FROM_CART,
        payload:item
    }
}

export const removeItem = (item)=>{
    return {
        type: cartActionType.REMOVE_ITEM,
        payload:item
    }
}