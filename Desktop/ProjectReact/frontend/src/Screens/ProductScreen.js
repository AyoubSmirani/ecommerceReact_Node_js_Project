import React, { useEffect,useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import {useSelector,useDispatch } from 'react-redux';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../Action/ProductAction';
import { createBrowserHistory } from 'history';



function ProductScreen(props) {
  const dispatch = useDispatch();
  
  let navigate = useNavigate();  
  const ProductID = useParams();
  
    
  const productDetails = useSelector((state) => state.productDetails);
  const {error , loading , product } = productDetails;
  console.log(product)
  const [qty, setQty] = useState(1);
  const addToCartHandler = () => {
    navigate(`/cart/${ProductID.id}?qty=${qty}`);
  }
    
  useEffect(()=>{
    
    dispatch(detailsProduct(ProductID.id))    
      }
      ,[ProductID.id, dispatch])
 
  return (
    <div> {
      loading ? (<LoadingBox></LoadingBox> )
      :
  
      error ? (<MessageBox variant='danger'>{error}</MessageBox>) :
  
      (<div>
        <div className='detailsProduct'>

          <div className='detailsImage'>
          <img  className='' src={product.image}></img>
          </div>

          <div className='ProductInfo'>
               <ul>
                <li className='productName'>
                   <h1>{product.name}</h1>
                </li>
                    <li>
                      <Rating rating={product.rate } numReviews={product.numReviews}/>
                    </li>
                   <li>prix : {product.price}d</li>
                   <li >Description : {product.description}</li>
               </ul>
          </div>

          <div className=''>
             <div className='ProductInfoBox'>
              <ul>
                <li>
                     <div className='row1'>
                      <div rclassName='row1T'>Price : </div>
                      <div className='price'>{product.price}D</div>
                     </div>
                </li>
                <li>
                     <div className='row1'>
                      <div className='row1T'>Status : </div>
                      <div >{
                        product.countInStock>0 ?
                        (<span>en stock </span>):
                        (<span>Inavailable </span>)
                        }</div>
                     </div>
                </li>
                {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="">
                          <div>quantité</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className=""
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
              </ul>
             </div>
          </div>
        </div>
        </div>)
    }
   </div> 
  )
}

export default ProductScreen