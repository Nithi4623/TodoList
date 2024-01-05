import React from 'react'

export const List = (props) => {
  return (
    <div>
  
   

       <ul  onClick={()=>{
        props.delete(props.id)
       }}> <li>{props.sent}</li></ul>

       
    </div>
  )
}
