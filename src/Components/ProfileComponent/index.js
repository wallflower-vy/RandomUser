import React, { useState } from 'react';
import './index.css';
import {BsArrowLeft} from 'react-icons/bs'
import {FiMail, FiPhoneCall} from 'react-icons/fi'
import PaginationComponent from '../../PaginationComponent';
// import { iteratorSymbol } from 'immer/dist/internal';

const ProfileComponent = ({details, index, Goback}) => {
 
 let info =details[index];
  return (
   
    <div>
        <div className=''>
         <div className='mt-6 back-arrow'  onClick={Goback}> 
          <BsArrowLeft className='icon mr-4' style={{color:'#3BD8D4'}}/><span className=''>RESULTS</span>
         </div>
         <div className='profile-box'>
         <div className='image-boxx'>
              <img
                className='userr-image'
                src={info.picture.large}
                alt='userImage'
              />
            </div>
            <div>
             <h1 className=' text-2xl font-black'><span className='font-bold'>{info.name.title}</span> <span  className='font-bold'>{info.name.first}</span> <span  className='font-bold'> {info.name.last}</span>  <span>{info. dob.age}</span></h1>
             <p className=' mt-2'>
                 
                    {info.location.street.number} , {info.location.street.name},{" "}
                    {info.location.state} {info.location.country}
                 
                </p>
              <div className='text-xl email-box'> <FiMail  className='icon mr-2 text-gray-400' />{info.email}</div>
              <div className='mt-10'>
               <span className='register-box'>JOINED: {info.registered.date}</span> 
               <span className='call-box'> <FiPhoneCall  className='icon'/>{info.phone}</span>
              </div>
              <p className='mt-5'>{info.cell}</p>
            
              
            </div>
         </div>
        </div>
      
      {/* <PaginationComponent /> */}
    </div>
  )
}

export default ProfileComponent
