import React, { useState } from 'react'
import Input from './Input'
import { List } from './List'





export default function(props) {

    const [item,setitem]= useState([])


   const handleclick  =(input)=>{
      
       setitem((prevs)=>{

        console.log(prevs)
        
         return [...prevs,input]
       })

   }


   const deletes = (id)=>{

      setitem((prevs)=>{

         return prevs.filter((item,index)=>{
          return index!==id
         })

      })


   }

 



  return (
    <div>

      
      <Input   handle={handleclick} />



      {  item.map( (ele,i)=>(

          <List key={i} sent={ele}  delete={deletes}  id={i}/>      ))


         
      }

     
         
      

    </div>
  )
}
