import React,{useState} from 'react'
import './test.css'

function Test(props) {
  
  return (
    <div>
        <div className='container'>
        <h1>{props.name}</h1>
        <img src={props.source} alt="" />
        <p>this is the reason he works hard</p>
       

        </div>
      
        
    </div>
  )
}

export default Test