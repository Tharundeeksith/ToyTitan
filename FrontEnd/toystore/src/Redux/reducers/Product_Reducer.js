import { Action_type } from "../constants/Action_Type";


const intialState={cartProduct:[]};

export const ProductReducer = (state = intialState, {type,payload}) => {
    switch (type) {
        case Action_type.ADD_TO_CART:
            return {
                ...state, cartProduct:[...state.cartProduct,payload]
            }   
        
        case Action_type.REMOVE_CART:
            return {
                cartProduct :[
                    ...state.cartProduct.filter( cart => cart!=payload)
                ]
            }
    
        default:
            return state;
    }
}