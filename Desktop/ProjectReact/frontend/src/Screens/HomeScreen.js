import React, { useEffect,  } from 'react'
import LoadingBox from '../components/LoadingBox.js';
import MessageBox from '../components/MessageBox.js';

import Product from "../components/Product.js";
import { ListProduct} from "../Action/ProductAction"
import  "../Style.css" ;
import{ useSelector ,useDispatch} from 'react-redux';
//import Data from '../../../Backend/data.js';
function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state)=> state.productList )
  const {loading , error , products } = productList
  useEffect(()=>{
dispatch(ListProduct())    
  }
  ,[])

  const Blog1 = './Blogimages/Blog1.jpg'
  return (
   <div style={{backgroundColor: '#F5F5F5'}}> {
    loading ? (<LoadingBox></LoadingBox> )
    :

    error ? (<MessageBox variant='danger'>{error}</MessageBox>) :

    (//<div>
      //<div className='firstImage' >
      //<img src={Blog1}></img>
   //</div>

   <section class="shop" id="shop">
		    <div class="container">  
    {
      products.map( (product) => (
        <>
        
        <Product key={product._id} product={product} />
        </>
      )
      )
    }
         </div>
      </section>
//  </div>
     
  )
}</div>)

    
}
 
  

export default HomeScreen