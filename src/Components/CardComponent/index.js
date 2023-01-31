import React from "react";
import "./index.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const CardComponent = ({ details, getProfileDetails }) => {
  return (
    <div className='main-cardComponent'>
      {details ? (
        details.map((item, index) => (
          <div className='card-box'>
            <div className='image-box'>
              <img
                className='user-image'
                src={item.picture.large}
                alt='userImage'
              />
            </div>
            <div className='content-box'>
              <div className='upper-box'>
              
                
                <h1 class=' cardname font-bold '>
                  <span>
                    {" "}
                    {item.name?.first} {item.name?.last}
                  </span>
                </h1>
                <p className='text-xl mt-2 text-gray-400'>
                  <i>
                    {item.location.street.number} , {item.location.street.name},{" "}
                    {item.location.state} {item.location.country}
                  </i>
                </p>
              </div>
              <div className='lower-box'>
                <p className="text">
                  <a href=''>
                    <AiOutlineMail className='icon' /> {item.email}
                  </a>
                </p>
                <p className="cell-number">
                  <FiPhoneCall className='icon' /> {item.phone}
                </p>
                <div className='arrow-btn' onClick={()=>{getProfileDetails(index)}}>
                  <BiRightArrowAlt />
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default CardComponent;
