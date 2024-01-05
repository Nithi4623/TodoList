
import React,{useState} from 'react';
import './App.css'


 function Inputarea(props){



    const [inputtext ,setInputtext] =useState("");

    

 
    
    return(
       
        <div className='form'>

             <input type='text'  onChange={(e)=>{setInputtext(e.target.value)

             }}  value={inputtext} />

             <button onClick={()=>{props.additems(inputtext)
                    setInputtext("")}}>
                 
                <span>
                    ADD
                </span>
             </button>
        </div>
    );




};
export default Inputarea;

