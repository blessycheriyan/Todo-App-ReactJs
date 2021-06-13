import React from 'react'
import './App.css';
import {useState} from 'react'
import moment from 'moment'

function App() {
    const[toDos,setTodos]=useState([])
    const[toDo,setTodo]=useState('')
    return (
     
        <div className="app">
           <br/>
        <div className="mainHeading">
          <br/>
         <marquee direction="right"> <h1>ToDo List</h1>
         </marquee>
        </div>
        <div className="subHeading">
          <br />
         <center> <p style={{color: "white"}}>{moment("20010704T120854").format("MMMM Do YYYY")}{" "}
          🌝 ☕ </p></center>
        
         <br />
          <h4 style={{color: "blue"}}>Welcome to your Todo App</h4>
      
    
        </div>
        <div className="input">
          <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
          <i onClick={()=>setTodos([...toDos,{id:Date.now(), text:toDo,status:false}])} className="fas fa-plus"></i>
 
        </div>
        <div className="todos">
            {
                toDos.map((obj)=>{
            return (        

            
          <div className="todo">
            <div className="left">
              <input onChange={(e)=>{
                  console.log(e.target.checked)
                  console.log(obj)
                  setTodos(toDos.filter(obj2=>{
                      if (obj2.id===obj.id){
                        obj2.status=e.target.checked
                  }
                  return obj2
                  }))

              }} value={obj.status} type="checkbox" name="" id="" />
              
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i   className="fas fa-times"></i>
            </div>
            
          </div>)
          
            })}   
            {toDos.map((obj)=>
            {
                if (obj.status){
                    return(<h1>{obj.text}</h1>)
                }
                return null
            })}          
        </div>
      </div>
   

)}
export default App
