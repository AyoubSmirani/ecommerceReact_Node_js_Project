import {createStore ,compose,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './Reducers/cartReducers';
import { orderDetailsReducer, orderReducers } from './Reducers/orderReducers';
import { productDetailsReducers, productListReducers } from "./Reducers/productReducers";
import { shippingReducers } from './Reducers/shippingReducers';
import { registerReducers, signinReducers } from './Reducers/userReducers';
const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },

    cart: {
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    },

    shippingAddress: localStorage.getItem('shippingAddressset')
      ? JSON.parse(localStorage.getItem('shippingAddressset'))
      : {},
      paymentMethod: 'PayPal',

  };
const reducer = combineReducers(
{ productList : productListReducers,
  productDetails : productDetailsReducers,
  cart : cartReducer,
  userSignin : signinReducers,
  userRegister : registerReducers,
  shipping : shippingReducers,
  orderget : orderReducers,
  orderDetails: orderDetailsReducer,
}
)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const store = createStore(reducer, 
    initialState ,
    composeEnhancer(applyMiddleware(thunk) ))

export default store