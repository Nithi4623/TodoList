import React, {useState} from 'react';
import Inputarea from './Inputarea';
import Todoitem from './Todoitem';
import './App.css';




function App() {

  const[items,setitems]= useState( []);


  
  



  


  

   

  
   const additems  = (Inputarea)=>{
    setitems( (prevs)=>(
     [...prevs,Inputarea]
    ))

 }


     
    
       


     const deleteitems = (id)=>{
         setitems( (prevs) => {
          return prevs.filter( (del,index)=>{
             return id!== index

          }
            
          )
         })

        
     };
    
  
  return (

    <>
    
    <div className="container">
      <div className="heading">
           <h1>Todo-App</h1>
           <Inputarea   additems={additems}/>
           <div>
            <ul>
              {
                items.map( (item,index)=>{
                  return(
                    <Todoitem  key={index} text={item} deleteitems={deleteitems} index={index}/>
                  )
                  
                })
              }
            </ul>
           </div>
      </div>
 
    </div>
    </>
   
   
   
  );
}

export default App;
