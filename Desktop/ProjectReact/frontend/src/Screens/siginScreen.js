import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signin } from '../Action/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()



  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo,error,loading } = userSignin;



const navigation = useRef(useNavigate());
const { search } = useLocation();
const searchSplit = search.split('=')[1];
const redirect = search ? `/${searchSplit}` : '/';

useEffect(() => {
if (userInfo) {
navigation.current(redirect);
}
}, [userInfo, navigation, redirect])



  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email,password))
    
  };
  return (
    <div className='signinRegisterBloc'>
       <div className='signinImage' >
           <img src='./Blogimages/signin.jpg'></img>
       </div>
      <div className='formContenair'> 
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Inscrivez-vous</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">adresse email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter votre email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Enter votre password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className='btn'>
          <label />
          <button  type="submit">
            Sign In
          </button>
          <div className='createAcount'>
          <label />
          <div>
          nouveaux clients? <Link style={{color:'#ff523b'}} to={`/register?redirect=${redirect}`}>Créez votre compte</Link>
          </div>
        </div>
        </div>
       
      </form>
     </div>

    </div>
  );
}