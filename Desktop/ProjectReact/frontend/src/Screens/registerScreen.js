import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { register } from '../Action/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()



  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo,error,loading } = userRegister;



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
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className='signinRegisterBloc'>
    <div className='signinImage' >
        <img src='./Blogimages/signin.jpg'></img>
    </div>
   <div className='formContenair'>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Créer un compte</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Nom d'utilisateur</label>
          <input
            type="text"
            id="name"
            placeholder="Entrer votre nom d'utilisateur"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Adresse email</label>
          <input
            type="email"
            id="email"
            placeholder="Entrer votre adresse email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Enter votre mot de passe"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter votre confirmation de mot de passe"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div className='btn'>
          <label />
          <button className="primary" type="submit">
            Register
          </button>
          <div className='createAcount'>
          <label />
          <div>
            
            Vous avez déjà un compte?{' '}
            <Link style={{color:'#ff523b'}} to={`/signin?redirect=${redirect}`}>S'identifier</Link>
          </div>
        </div>
        </div>
        
      </form>
      </div>

    </div>
  );
}

