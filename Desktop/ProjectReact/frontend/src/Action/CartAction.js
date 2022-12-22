import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESSE } from "../Constant/CartConstant";
export const CartItem = (ProductID,qty) => async (dispatch,getState) =>{
    const data = await axios.get(`/api/product/${ProductID}`);
       console.log(data)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name : data.data.name,
            image : data.data.image,
            price :data.data.price,
            countInStock : data.data.countInStock,
            product : data.data._id,
            qty
        }

    }
    )
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    }

    export const removeFromCart = (productId) => (dispatch, getState) => {
        dispatch({ type: CART_REMOVE_ITEM   , payload: productId });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
      };

  export const saveShippingAddress = (fullName, address, city, postalCode, country) => (dispatch) => {
        const data = {fullName,address,city,postalCode,country}
   
          dispatch({ type: CART_SAVE_SHIPPING_ADDRESSE, payload: data });
        localStorage.setItem('shippingAddressset', JSON.stringify(data));
      
        
      };

      export const savePaymentMethod = (data) => (dispatch) => {
        dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
      };