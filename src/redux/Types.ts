export const Types = {
  user: {
    LOGIN_USER: "LOGIN_USER",
    REGISTER_USER: "REGISTER_USER",
    GET_USER: "GET_USER",
    LOGOUT_USER: "LOGOUT_USER",
    GET_TOKEN_FROM_STORAGE: 'GET_TOKEN_FROM_STORAGE',
  },
  cart: {
    FETCH_CART_ITEMS: "FETCH_CART_ITEMS",
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_CART: "REMOVE_CART",
  },
  product: {
    GET_PRODUCTS: "GET_PRODUCTS",
    GET_PRODUCT_BY_ID: "GET_PRODUCT_BY_ID",
  },
  order: {
    CREATE_NEW_ORDER: "CREATE_NEW_ORDER",
    FETCH_MY_ORDERS: "FETCH_MY_ORDERS",
  },
};
