import React, { useEffect } from 'react'

function Bars(props) {
    useEffect(() => {
     console.log(props.step1,props.step2,props.step3)
    }, [])
    
  return (
    <div>
    <div className={props.step1 ? 'bar  activebar' : 'bar '}/>
    <div className={props.step2 ? 'bar2  activebar ' : 'bar2 '}></div>
    <div className={props.step3 ? 'bar3  activebar ' : 'bar3'}></div>
    
    </div>
  )
}

export default Bars