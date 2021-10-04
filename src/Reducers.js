import { 
    CHANGE_INPUTFIELD,
    REQUEST_PRODUCTS_PENDING,
    REQUEST_PRODUCTS_SUCCESS,
    REQUEST_PRODUCTS_REJECTED
 } from './Constants';


const initialStateInput = {
    inputField: ''
}

export const searchProductsByName = (state=initialStateInput, action={}) => {
    switch(action.type) {
        case CHANGE_INPUTFIELD:
        return {...state, inputField: action.payload};

        default: 
        return state;
    }
}

const initialStateProducts = {
    isPending: false,
    products: [],
    error: ''
}

export const getProducts = (state=initialStateProducts, action={}) => {
    switch(action.type) {
        case REQUEST_PRODUCTS_PENDING:
        return {...state, isPending: true};
        case REQUEST_PRODUCTS_SUCCESS:
        return {...state, products: action.payload, isPending: false};
        case REQUEST_PRODUCTS_REJECTED:
        return {...state, error: action.payload, isPending: false};

        default: 
        return state;
    }
}