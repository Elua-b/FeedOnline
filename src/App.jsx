

import React,{useState, useEffect} from 'react'
import data from './items'
import './navbar.css'


import './App.css'
function App() {
  const [item,setItem]=useState(data)
  const [input, setInput]=useState('')

  useEffect(() => {
    setItem(data.filter(it=> it.head.toLowerCase().includes(input.toLowerCase())))
  }, [input]);
  return (
    <div className='main'>
      
      <div>

<nav className="navbar">
  <ul>
    
    <li onClick={()=> setItem(data)}>All</li>
  </ul>
    <ul>
        <li onClick={()=>setItem(data.filter((d)=> d.head === "Japan"))}>Japanese</li>

    </ul>
    <ul>
        <li  onClick={()=>setItem(data.filter((d)=> d.head === "America"))}>American</li>
        
    </ul>
    <ul>
        <li  onClick={()=>setItem(data.filter((d)=> d.head === "Thailand"))}>Thailand</li>
        
    </ul>
    <ul>
        <li  onClick={()=>setItem(data.filter((d)=> d.head === "Africa"))}>African</li>
        
    </ul>
 </nav> 
 <input type="search"  onChange={(e)=> setInput(e.target.value)}
 placeholder='search food' value={input}  />
</div>
{item.length===0 && <p>No results found</p> } 
<div className="container">
 
    {item.map((values)=>{
      const {id,head,image,price,content}=values;
      return (
        <div className="box" key={id}>
        <h1>{head}</h1>
       
    <img src={image} alt="" />
    <div className="price">{price}</div>
    <div className="content">{content} </div>
    </div>
      )
    })}
    
    
  
</div>
</div>

    
  )
}

export default App