import { IProduct } from "../../entities/product/interface"
import * as actionTypes from "./actionTypes"

export const addNewProduct = (product: IProduct) => {
    return {
        type: actionTypes.ADD_NEW_PRODUCT,
        payload: product
    }
}

export const addProductToCart = (product: IProduct) => {
    return {
        type: actionTypes.ADD_PRODUCT_TO_LIST,
        payload: product
    }
}

export const removeProductFromCart = (id: number, currentAmount: number) => {
    return {
        type: actionTypes.REMOVE_PRODUCT,
        payload: {
            id,
            count: currentAmount
        }
    }
}

export const increaseProductAmount = (id: number, currentAmount: number) => {
    return {
        type: actionTypes.INCREASE_PRODUCT_AMOUNT,
        payload: {
            id,
            count: currentAmount
        }
    }
}