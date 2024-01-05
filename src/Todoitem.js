import React, { useState } from 'react'
import './App.css';
import { MdDeleteSweep } from "react-icons/md";



export default function Todoitem(props) {
 

 

  
  return (
    <div className='flex' >


     
       <li>{props.text}</li>
       <MdDeleteSweep onClick={()=> props.deleteitems(props.index)}/>




    </div>
  )
}
