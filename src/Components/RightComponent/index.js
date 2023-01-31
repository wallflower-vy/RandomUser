import React from "react";
import "./index.css";
import Switch from "react-switch";

import DownloadButton from "../DownloadButton";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PaginationComponent from "../../PaginationComponent";


const RightComponent = ({ children, handleNext,handleprevious }) => {

 
  return (
    <div className='right-component'>
      <div className='mt-12 '>
        <h1 class='text-2xl heading  font-bold'>All Users</h1>
        <p>Filter by</p>

        <form>
          <div className='form-box'>
            <input
              class='appearance-none block form-input   bg-gray-200 text-gray-700 border border-gray-200   leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-city'
              type='text'
              placeholder='Albuquerque'
            />
            <div class='relative '>
              <select
                class='block appearance-none form-input  bg-gray-200 border border-gray-200 text-gray-700   rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-state'
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-700'>
                <svg
                  class='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
            <Switch /> Show Country
          </div>
        </form>
      </div>
   
    {children}
      <div className=' botton-main-box'>
        <DownloadButton />

        <div className='flex'>
          <PaginationComponent
            bg='#D3D4DC'
            color='#fff'
            icon={<IoIosArrowBack />}
            handlepage={handleprevious}
            
          />
          <PaginationComponent
            bg='#22273D'
            color=''
            icon={<IoIosArrowForward />}
            handlepage={handleNext}
          
          />
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
