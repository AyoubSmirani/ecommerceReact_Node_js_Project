import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams,useLocation,  useNavigate, Link } from 'react-router-dom';
import { CartItem, removeFromCart } from '../Action/CartAction';
import {FcBriefcase} from 'react-icons/fc'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {GiBottomRight3DArrow} from 'react-icons/gi'

import MessageBox from '../components/MessageBox';



export default function CartScreen(props) {
 
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

const params = useParams();
const productId = params.id;
console.log(productId)
const {search} =useLocation();
const qtyInUrl = new URLSearchParams(search).get('qty');
const qty = qtyInUrl?Number(qtyInUrl):1;
const dispatch = useDispatch()
const Navigate = useNavigate()

const removeFromCartHandler = (id) => {
  dispatch(removeFromCart(id));
};

const checkoutHandler = () => {
  Navigate('/signin?redirect=shipping');
};


useEffect(() => {

  if(productId){
  dispatch(CartItem(productId,qty))
  }
}, [dispatch,productId, qty])

  return (
    <div className="">
    <div className="shoppingCartTable">
      <div className='TitleCart'><h1>Panier</h1><HiOutlineShoppingBag fontSize={50}></HiOutlineShoppingBag></div>
      <GiBottomRight3DArrow fontSize={40} color='#ff523b' style={{position:'absolute',top:'245px',left:'10px'}}></GiBottomRight3DArrow>
      {cartItems.length === 0 ? (
        <div className='cartEmpty'>
         <div>Le panier est vide. <Link to="/">aller faire les courses</Link></div>
        </div>
      ) : (
        <div className='smallcontenair cartPage'>
          <table>
            <tr>
              <th>produit</th>
              <th>quantité</th>
              <th>total</th>
            </tr>
          {cartItems.map((item) => (
                          <tr key={item.product}>
                
                  <td>
                    <div className='cartInfo'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  
                  <div >
                    <Link style={{color:'black',fontSize:'20px'}} to={`/product/${item.product}`}>{item.name}</Link>
                    <p>prix : {item.price }</p>
                  </div>
                  </div>
                  </td>

                  <td>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          CartItem(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </td>


                  <td>${item.price}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
            
            ))}
            </table>
          </div>
        )}
      </div>
  
        <div className="TotalPrice">
          <table>
            <tr>
              <td>
              <h2>
                la totalité ({cartItems.reduce((a, c) => a + c.qty, 0)} items) 
                
              </h2>
              </td>
              <td>: ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</td>
            </tr>
            <tr>
              <td className='checkOut'>
              <button
                type="button"
                onClick={checkoutHandler}
                disabled={cartItems.length === 0}
              >
                Passer à la caisse<FcBriefcase fontSize={40}/>
              </button>
              
              </td>
            </tr>
          </table>
        </div>
     
      </div>
  );
}