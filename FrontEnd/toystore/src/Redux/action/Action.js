import { Action_type } from "../constants/Action_Type"

export const cartProducts = (products) => {
    return{
        type: Action_type.ADD_TO_CART,
        payload: products
    }
}

export const removeCart = (products) => {
    return {
        type: Action_type.REMOVE_CART,
        payload: products
    }
}