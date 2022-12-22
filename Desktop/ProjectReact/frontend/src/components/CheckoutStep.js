import React, { useEffect } from 'react';
import Bars from './Bars';

export default function CheckoutSteps(props) {
  var Width= window.innerWidth;
    useEffect(() => {
     console.log(step1,step2,step3,Width)

    
    
  }, [])






  const step1 = props.step1;
  const step2 = props.step2;
  var step3 = props.step3;
  var step4 = props.step4;
 

  const balise = <div>{
    !step4  ?
    step3  ? <Bars step1 step2 /> : <Bars step1 />
    :
    step4 ? <Bars step1 step2 step3/> : <Bars step1 step2/>
  
   }</div>
 
  if(step3===undefined){
    step3=false;
    console.log(step3)
  }
  
  if(window)
  return (
    <div>
      
      {
     Width >=1536?
    balise
    :
    ''
      }
    
    <div className="Steps">
      <div className={props.step1 ? 'active' : ''}>
        <div className={props.step1  ? 'active1' : 'cercle'}>
          <h1>1</h1>
        </div>
        <h1>Sign-In</h1>
        </div>


      <div className={props.step2 ? 'active' : ''}>
      <div className={props.step2 ? 'active1' : 'cercle'}>
      <h1>2</h1>
        </div>
        <h4>Shipping</h4>
        </div>

        

      <div className={props.step3 ? 'active' : ''}>
      <div className={props.step3 ? 'active1' : 'cercle'}>
      <h1>3</h1>
       </div>
        <h4>Payment</h4>
        </div>


      <div className={props.step4 ? 'active' : ''}>
      <div className={props.step4 ? 'active1' : 'cercle'}>
      <h1>4</h1>
      </div>
        <h4>Place Order</h4>
        </div>
    </div>


    </div>
  );
}