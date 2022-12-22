import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Product({product}) {
  
  return (
    <div>
             <div key={product._id} className="box">
              <Link to={`/product/${product._id}`}>
                <img  src={product.image} alt={product.name} />
              </Link>
              <div className="card-body">
              <Link to={`/product/${product._id}`}>
                  <h4>{product.name}</h4>
                </Link>
              <Rating rating={product.rate} numReviews={product.numReviews} />
                <h5 >{product.price}</h5>
              </div>
            </div>
         
           </div>
  )
}

export default Product