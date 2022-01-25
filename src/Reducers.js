import {
  CHANGE_INPUTFIELD,
  REQUEST_PRODUCTS_PENDING,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_REJECTED,
  SELECT_PRODUCTS_BY_CATEGORY,
  RESTORE_PRODUCTS,
  ORDER_PRODUCTS,
} from "./Constants";

const initialCategoryInput = {
  category: "",
};

export const getProductsByCategory = (
  state = initialCategoryInput,
  action = {}
) => {
  switch (action.type) {
    case SELECT_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

const initialOrderedInput = {
  field: "",
};

export const getOrderedProducts = (
  state = initialOrderedInput,
  action = {}
) => {
  switch (action.type) {
    case ORDER_PRODUCTS:
      return {
        ...state,
        field: action.payload,
      };
    default:
      return state;
  }
};

const initialStateInput = {
  inputField: "",
};

export const searchProductsByName = (
  state = initialStateInput,
  action = {}
) => {
  switch (action.type) {
    case CHANGE_INPUTFIELD:
      return { ...state, inputField: action.payload };
    case RESTORE_PRODUCTS:
      return { ...state, inputField: "" };
    default:
      return state;
  }
};

const initialStateProducts = {
  isPending: false,
  products: [],
  allProducts: [],
  error: "",
};

export const getProducts = (state = initialStateProducts, action = {}) => {
  const orderProducts = (items, value) => {
    return items.sort((a, b) => {
            if (a[value] < b[value]) return -1;
            if (a[value] > b[value]) return 1;
            return a[value] - b[value];
          });
  };

  switch (action.type) {
    case REQUEST_PRODUCTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        isPending: false,
      };
    case REQUEST_PRODUCTS_REJECTED:
      return { ...state, error: action.payload, isPending: false };
    case SELECT_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.category === action.payload
        ),
      };
    case ORDER_PRODUCTS:
      return {
        ...state,
        products: orderProducts(state.products, action.payload),
      };
    case RESTORE_PRODUCTS:
      return { ...state, products: state.allProducts };
    default:
      return state;
  }
};