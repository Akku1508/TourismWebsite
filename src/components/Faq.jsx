import React from 'react'
import {questions} from './Faq-ques'
import {useState} from 'react'

import './Faq.css'
import { Design } from './Design'
import Footer from './Footer'

export const Faq = () => {
  const[value,setValue]=useState(questions);
  return (
    <div className="faq-card shadow-xl  ">
      <div className='mb-4'>
        <h1 className=' text-4xl text-black px-[1rem]'>FAQ's</h1>
        {
          value.map((cur,index)=>{
            return <Design key={index} {...cur}></Design>;

          })
        }
      </div>
      <Footer/>
    </div>
  )
}
