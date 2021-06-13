import React from 'react'
import {useState,useEffect} from 'react'
function Count() {
    
    const[count,setCount]=useState(0)
    const[count2,setCount2]=useState(0)
    useEffect(() =>{
        console.log('Mountingg')
       
            console.log('up'+count)
            console.log('ct'+count2)
          
        
        },[count])

    
    return (
        <div>

         <button onClick={()=>setCount(count+1)}>Increment</button> 
        <h1>im here{count}</h1>
        <button onClick={()=>setCount2(count2+1)}>Increment</button> 
        <h1>im here{count2}</h1>
        </div>
    )
}

export default Count
