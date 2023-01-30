import React, { useState } from "react";
import "./index.css";
import { FaUsers, FaMale, FaFemale } from "react-icons/fa";
import MaleUsersComponnet from "../MaleUsersComponent";

const ButtonComponent = ({ bg, icon, text, handleBtnClick }) => {
 
  return (
    <div className='button-box'>
      <button
        className='users-btn'
        style={{ backgroundColor: bg }}
        onClick={handleBtnClick}
      >
        {icon}
      </button>
      <span  className=" btn-text text-white opacity-50 ml-10">{text}</span>
    </div>
  );
};

export default ButtonComponent;
