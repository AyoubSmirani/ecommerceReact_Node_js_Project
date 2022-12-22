import { CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESSE } from "../Constant/CartConstant";

export const shippingReducers = (state = {}, action) => {
    switch (action.type) {
         case CART_SAVE_SHIPPING_ADDRESSE:
          return {  ...state, shippingget: action.payload} 
          case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
      default:
        return state;
        
    }
    
    
  };