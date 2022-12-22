

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter,Link,Outlet,Route, Routes } from 'react-router-dom';
import { signout } from './Action/userAction.js';
import CartScreen from './Screens/CartScreen.js';
import HomeScreen from "./Screens/HomeScreen.js"
import OrderScreen from './Screens/OrderScreen.js';
import PaymentMethodScreen from './Screens/PaymentMethodScreen.js';
import PlaceOrderScreen from './Screens/PlaceOrderScreen.js';
import ProductScreen from './Screens/ProductScreen';
import RegisterScreen from './Screens/registerScreen.js';
import ShippingAdresseScreen from './Screens/ShippingAdresseScreen.js';
import SigninScreen from './Screens/siginScreen.js';
import {BsPersonCircle} from 'react-icons/bs'
import {TiShoppingCart} from 'react-icons/ti'
import {ImFacebook2} from 'react-icons/im'
import {BsInstagram,BsYoutube} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'



function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  ////////////////////////////////////////////////////
  const UserSignin = useSelector((state) => state.userSignin);
  const { userInfo } = UserSignin;
 
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
const LinkStyle ={
  color: 'black', hover:{ color: 'orange'}
}


  return (

    <BrowserRouter >
    <div className="grid-container">


    <header className="navbar">
      <div className='logo'>
        
        <Link className="brand" to="/"><img src='./Blogimages/clothes.png' ></img></Link>
      </div>
      <div className='icon'>   
      <div>
        <Link to='/cart/i'>
        <TiShoppingCart fontSize={40} />
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
        </Link>
           </div>
        <div className='profile'>
        <BsPersonCircle color='white' fontSize={25} />
        {userInfo ? (
              <div className="dropdown">

                <Link to="#">
                  {userInfo.name}{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link style={LinkStyle} to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
              <Link to="/signin">Sign In</Link>
              </div>
            )}
            </div>
            </div> 
    </header>

    


    <main>
      <div>
        
        <Routes  >
        <Route path="/cart/:id" element={<CartScreen></CartScreen>}></Route> 
        <Route path='/product/:id' element={<ProductScreen></ProductScreen>} ></Route>
        <Route path="/signin" element={<SigninScreen></SigninScreen>}></Route>
        <Route path="/register" element={<RegisterScreen></RegisterScreen>}></Route>
        <Route path="/shipping" element={<ShippingAdresseScreen></ShippingAdresseScreen>}></Route>
        <Route path="/payment" element={<PaymentMethodScreen></PaymentMethodScreen>}></Route>
        <Route path="/placeorder" element={<PlaceOrderScreen></PlaceOrderScreen>}></Route>
        <Route path="/order/:id" element={<OrderScreen></OrderScreen>}></Route>
        <Route path='/' element={<HomeScreen/>} exact ></Route>
        </Routes>
       <Outlet></Outlet>
        


</div>
</main>


 <footer id="footer">
        <div class="content1">
          <div class="left box1">
            <div class="upper">
              <div class="topic">About us</div>
              <p>isg_code is a site where you can find JavaScript,
              dom, json and PhP exercices.</p>
            </div>
            <div class="lower">
              <div class="topic">Contact us</div>
              <div class="phone">
                <a href="#"><i class="fas fa-phone-volume"></i>72 570 780</a>
              </div>
              <div class="email">
                <a href="#"><i class="fas fa-envelope"></i>isccb@isccb.rnu.tn</a>
              </div>
            </div>
          </div>
          <div class="middle box1">
            <div class="topic">menu</div>
            <div><a href="#">acceuil</a></div>
            <div><a href="#">JavaScript</a></div>
            <div><a href="#">dom</a></div>
            <div><a href="#">json</a></div>
            <div><a href="#">PhP</a></div>
          </div>
          <div class="right box1">
            <div class="topic">Subscribe us</div>
            <form action="#">
              <input type="text" placeholder="Enter email address"></input>
            <Link to='/signin' ><input type="submit" name="" value="Send"></input></Link>
              <div class="media-icons">
                <a href="https://www.facebook.com/ayoub.smirani/"><ImFacebook2 fontSize={25} /></a>
                <a href="https://www.instagram.com/ayoubsmirani/"><BsInstagram fontSize={25} /></a>
                <a href="#"><BsYoutube fontSize={25}/></a>
                <a href="#"><FaTwitter fontSize={25}/></a>
                <a href="#"><AiFillLinkedin fontSize={25}  /></a>
              </div>
            </form>
          </div>
        </div>
        <div class="bottom">
          <p>Copyright © 2022 <Link to="/">CLOTHES</Link> All rights reserved</p>
        </div>
    </footer>

</div>
</BrowserRouter>

    
  );
}

export default App;
