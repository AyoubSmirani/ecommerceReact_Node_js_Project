import  axios  from "axios";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constant/ProductConstant"

export const ListProduct = () => async (dispatch) =>
{
dispatch( { 
    type : PRODUCT_LIST_REQUEST
})

try {
    const  Data1  = await axios.get('/api/product');
    const ArrayProduct = [];
    for (let i = 0 ; i<6 ; i++){
       ArrayProduct.push(Data1.data[i]);
    }
     console.log(ArrayProduct)
    dispatch( { 
        type : PRODUCT_LIST_SUCCESS ,
        payload : ArrayProduct
    })
} catch (error) {
    dispatch( { 
        type : PRODUCT_LIST_FAIL,
        payload : error.message
    })
}

}


export const detailsProduct = (ProductID) => async (dispatch) =>
{
dispatch( { 
    type : PRODUCT_DETAILS_REQUEST, payload:ProductID
})

try {
const data = await axios.get(`/api/product/${ProductID}`)  

    
dispatch({ type:PRODUCT_DETAILS_SUCCESS , payload : data.data})
}catch(error){
    dispatch({ type:PRODUCT_DETAILS_FAIL , payload : error.message && error.reponse.data.message
    ? error.reponse.data.message :
    error.message,
    })
}

}

