import axios from "axios"
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../Constant/userConstant"

export const signin = (email,password) => async(dispatch) =>{
 dispatch(
    {type: USER_SIGNIN_REQUEST,
     payload : {email,password},
    }
 ) 
 try {
    const data = await axios.post('/api/users/signin',{email,password});
    console.log(data)
    dispatch({
        type:USER_SIGNIN_SUCCESS,
        payload:data.data
    })
    localStorage.setItem('userInfo', JSON.stringify(data.data));
 } catch (error) {
    dispatch({
        type:USER_SIGNIN_FAIL,
        payload: 'Invalid email ou password'  
    })
 }
 
}

export const register = (name,email,password) => async(dispatch) =>{
   dispatch(
      {type: USER_REGISTER_REQUEST,
       payload : {name,email,password},
      }
   ) 
   try {
      const data = await axios.post('/api/users/register',{name,email,password});
      console.log(data)
      dispatch({
          type:USER_REGISTER_SUCESS,
          payload:data.data
      })
      dispatch({
         type:USER_SIGNIN_SUCCESS,
         payload:data.data
     })
      localStorage.setItem('userInfo', JSON.stringify(data.data));
   } catch (error) {
      dispatch({
          type:USER_REGISTER_FAIL,
          payload: error.message  
      })
   }
   
  }






export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddressset')
    dispatch({ type: USER_SIGNOUT });
  };