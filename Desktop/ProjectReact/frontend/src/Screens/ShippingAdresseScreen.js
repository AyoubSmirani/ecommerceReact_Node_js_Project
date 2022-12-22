import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../Action/CartAction';

import CheckoutSteps from '../components/CheckoutStep'


function ShippingAdresseScreen() {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    
      

    const navigate = useNavigate()
    if (!userInfo) {
        navigate('/signin');
      }
      const shipping = useSelector(
        state => state.shipping);
      const { shippingget} = shipping;
    
      var ISstorage = true
     if(shippingget === undefined ){
       ISstorage = false
      console.log('okay')
     }
     

    
    const [fullName, setFullName] = useState( ISstorage ? shippingget.fullName : ''  );
    const [address, setAddress] = useState( ISstorage ? shippingget.address : '' );
    const [city, setCity] = useState(ISstorage ? shippingget.city : '' );
    const [postalCode, setPostalCode] = useState(ISstorage ? shippingget.postalCode : '' );
    const [country, setCountry] = useState(ISstorage ? shippingget.country : '' );
    const dispatch = useDispatch();



    const submitHandler = (e) => {
        e.preventDefault();
        
        dispatch(
          saveShippingAddress(fullName, address, city, postalCode, country)
        );
        navigate('/payment');
      };


  return (
    <div>
        <CheckoutSteps step1 step2></CheckoutSteps>
        <div>
      
      <form className="formShipping" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default ShippingAdresseScreen