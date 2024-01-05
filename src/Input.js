import React, { useState } from 'react'

export default function
(props) {
  const[input,setinput]=useState()

  return(
   <div>


     <input  type='text'  
      onChange={(eve) => setinput(eve.target.value) } 
     value={input}/>
      <button onClick={()=>{
        props.handle(input)
        setinput("")
      }}>Add</button>

    
    </div>
  )
}
