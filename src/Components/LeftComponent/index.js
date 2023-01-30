import React from "react";
import ButtonComponent from "../ButtonComponent";
import { FaUsers, FaMale, FaFemale } from "react-icons/fa";
import "./index.css";

const LeftComponent = ({ getfeMaleuser, getMaleuser, fetchUsers,handlechange }) => {

  return (
    <div className='left-main-box'>
      <span className="left-heading">Hello,</span>{" "}
      <span className='left-heading font-bold'>Emerald</span>
      <p class='text-white mt-5 opacity-50'>
        Welcome to your dashboard, kindly sort through the user base
      </p>
      <form class='flex items-center mt-5 mb-14'>
        <div class='relative w-full'>
          <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              aria-hidden='true'
              class='w-5 h-5 text-black-600 dark:text-gray-800'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </div>
          <input
          onChange={handlechange}
            type='text'
            id='simple-search'
            class=' appearance-none text-xl  placeholder-gray-800 text-black-900 
              block w-full pl-10  leading-tight focus:outline-none  
               '
            placeholder='Find a user'
            required
          />
        </div>
      </form>
      <span className="text-white text-xl">Show Users</span>
      <div className="left-button-box">
     
        <ButtonComponent
          bg='#FF0AA2'
          icon={<FaUsers />}
          text='All users'
          handleBtnClick={fetchUsers}
        />
        <ButtonComponent
          bg='#00BEB8'
          icon={<FaMale />}
          text='Male users'
          handleBtnClick={getMaleuser}
        />
        <ButtonComponent
          bg='#8144BF'
          icon={<FaFemale />}
          text='Female users'
          handleBtnClick={getfeMaleuser}
        />
      </div>
    </div>
  );
};

export default LeftComponent;
