import {
  CHANGE_INPUTFIELD,
  REQUEST_PRODUCTS_PENDING,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_REJECTED,
  SELECT_PRODUCTS_BY_CATEGORY,
  RESTORE_PRODUCTS,
  ORDER_PRODUCTS,
} from "./Constants";


export const setInputField = (text) => {
  return {
    type: CHANGE_INPUTFIELD,
    payload: text,
  };
};

export const filterProductsByCategory = (category) => {
  return {
    type: SELECT_PRODUCTS_BY_CATEGORY,
    payload: category,
  };
};

export const setProductsByOrder = (field) => {
  return {
    type: ORDER_PRODUCTS,
    payload: field,
  };
};


export const setAllProducts = () => {
    return {
      type: RESTORE_PRODUCTS,       
    };
  };

export const requestProducts = () => (dispatch) => {
  dispatch({
    type: REQUEST_PRODUCTS_PENDING,
  });
  fetch("https://us-central1-fir-projects-3ee1f.cloudfunctions.net/demopayload")
    .then((response) => response.json())
    .then((data) => {
      const allProducts = data.data.products.map((item, i) => {
        return Object.assign({}, item, { quantity: 0, ischecked: true });
      });
      return dispatch({
        type: REQUEST_PRODUCTS_SUCCESS,
        payload: allProducts.sort((a, b) => a.id - b.id),
      });
    })
    .catch((error) =>
      dispatch({
        type: REQUEST_PRODUCTS_REJECTED,
        payload: error,
      })
    );
};