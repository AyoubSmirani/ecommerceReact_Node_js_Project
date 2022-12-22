import axios from "axios"
import { CART_EMPTY } from "../Constant/CartConstant";
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS } from "../Constant/orderConstant"



export const orderAction = (order) => async(dispatch,getState)=>{
    dispatch(
        {type : ORDER_CREATE_REQUEST,payload: order}
    )

    try {
        
        const {
            userSignin: { userInfo },
          } = getState();
          order ={ ...order, id : userInfo._id}
          
      const data = await axios.post('/api/orders',order)  
      


    dispatch({type : ORDER_CREATE_SUCCESS,payload :data.data.order }) 
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem('cartItems');

    } catch (error) {
       dispatch({
        type : ORDER_CREATE_FAIL,
        payload :  error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
       }) 
    }


}


export const detailsOrder = (orderId) => async (dispatch, getState) => {
  dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.get(`/api/orders/${orderId}`);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
  }
};