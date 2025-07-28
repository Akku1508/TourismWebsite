import React from 'react'
import {useState} from 'react'

export const Design = ({question,answer}) => {
  const [show,setShow]= useState(false);
  const [sign,setSign]= useState("+");
  function one(){
    setShow(!show);
  }
  return (
    <div  className="card px-[1rem] mt-5 mb-2 ">
      <div class="topic" style={{color:"#ecebeb",display:"flex",justifyContent:"space-between",cursor:"pointer",  border:"1px solid gray", backgroundColor:"black",
    padding:"12px"}} >
      <h2 onClick={()=>{one()}}>{question} </h2>
      <div onClick={()=>{one()}}>
      <p style={{paddingRight:"10px",paddingLeft:"30px"}}>{show?"-":"+"}</p></div>
      </div>
      {
        show && <p style={{color:"#d1d1d1",background:"#4d4c4c",border:"1px solid black",padding:"20px"}}>{answer}</p>
      }
      
    </div>
  )
}
