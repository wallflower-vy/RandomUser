import axios from 'axios';
import React from 'react';
import './index.css'
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";


const PaginationComponent = ({icon,bg,color, handlepage}) => {
   
  return (
   
         <div className="page-btn-box">
           <button
            className='page-btn py-3 px-4 mr-2 text-2xl'
            style={{ backgroundColor: bg, color:color }}
            // onClick={handleClick}
            onClick ={handlepage}
           >{icon}</button>
           {/* <button className="page-btn2 py-3 text-2xl px-4 text-white"  ><IoIosArrowForward/></button> */}
           <div className='button-box'>
      
    
    </div>
      </div>
   
  )
}

export default PaginationComponent