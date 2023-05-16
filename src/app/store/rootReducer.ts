import { products } from '../../const';
import * as actionTypes from './actionTypes';
import { Action, StoreState } from './interface';

const initialState: StoreState = {
    products: products,
    listProducts: []
}

const reducer = (
    state: StoreState = initialState,
    action: Action
): StoreState => {
    
    switch (action.type) {
        case actionTypes.ADD_NEW_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case actionTypes.ADD_PRODUCT_TO_LIST:
            return {
                ...state,
                listProducts: [...state.listProducts, action.payload]
            }
        case actionTypes.INCREASE_PRODUCT_AMOUNT:
            const newListProducts = state.listProducts.map((product) => {
                if (product.id === action.payload.id) {
                    return {...product, count: action.payload.count + 1}
                }
                return product;
            })
            return {
                ...state,
                listProducts: newListProducts
            }
        case actionTypes.REMOVE_PRODUCT:
            if (action.payload.count === 1) {
                return {
                    ...state,
                    listProducts: state.listProducts.filter((product) => product.id !== action.payload.id)
                }
            }
            const updatedListProducts = state.listProducts.map((product) => {
                if (product.id === action.payload.id) {
                    return {...product, count: action.payload.count - 1}
                }
                return product;
            })
            return {
                ...state,
                listProducts: updatedListProducts
            }
    }
    return state
}
  
export default reducer;