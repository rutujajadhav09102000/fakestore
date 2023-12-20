import { REMOVE_SELECTED_PRODUCTS, SELECTED_PRODUCTS, SET_PRODUCTS } from "../constants/types"

export const setProducts =(products) => {
    return{
        type : SET_PRODUCTS ,
        payload : products ,
    }
}

export const selectedProducts =(product) => {
    return{
        type : SELECTED_PRODUCTS ,
        payload : product ,
    }
}

export const removeSelectedProducts =() => {
    return{
        type : REMOVE_SELECTED_PRODUCTS ,
    }
}