import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productListReducer,
  productDetailReducer,
} from "./reducers/productReducers";

import { cartReducer } from "./reducers/cartReducers";
import { userLoginReducer } from "./reducers/loginReducers";
import { userRegisterReducer } from "./reducers/registerReducers";
import { userProfileReducer } from "./reducers/profileReducers";
import { updateUserProfileReducer } from "./reducers/updateReducers";
import {
  orderCreateReducer,
  orderDetailReducer,
  orderListMyReducer,
  orderPaymentReducer,
} from "./reducers/orderReducers";



const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userProfileReducer,
  userUpdateProfile: updateUserProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailReducer,
  orderPay: orderPaymentReducer,
  orderListMy:orderListMyReducer, 
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const userInfoFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const shippingAdddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAdddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
