import React,{useState} from "react";
import heart from '../assets/heart-solid.svg'

function Card(props) {
  let f1=useState("Add to favourite");
  
  let active=useState("");

  let [btn,set]=f1;
  let [btn2,set2]=active;


  function add(){

  set((prevState) => {
    
    if (prevState == "Added to favourite"){
      return "Added to the Carts";
    } else {
      return "Are u Add to Favourite  ";

    } 
  });
    set2((prevClass) => {


      if (prevClass == ""){
        return "active";
      } else {
        return " ";
  
      } 
    });
  }
      
    


  
  
  return (
    <div className={`card ${btn2}`}>
      <img src={heart} className="icon"/>
      <img src={props.cardContent.imgSrc} />

      <h3>{props.cardContent.name}</h3>
      <p>Ph : {props.cardContent.phone}</p>
      <p>Email: {props.cardContent.email}</p>
      <i class="fas fa-heart"></i>
      <button onClick={add}>{btn} </button>
    </div>
  );
  }

export default Card;

