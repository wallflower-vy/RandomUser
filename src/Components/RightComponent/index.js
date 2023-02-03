import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { DownloadExcel } from "react-excel-export";
import Switch from "react-switch";
// import DownloadButton from "../DownloadButton";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PaginationComponent from "../PaginationComponent";
import { BiCloudDownload } from "react-icons/bi";

const RightComponent = ({
  children,
  handleNext,
  handleprevious,

  // switchHandler,
  // checked,
}) => {
  const [users, setusers] = useState(false);
  const sample = (
    <div className="download-btn py-3 px-7 text-white text-xl font-bold">
      <BiCloudDownload  className="icon"/>Download Result
    </div>
  );

  const [page, setpage] = useState(1);
  const downloadUsers = async () => {
    const { data } = await axios.get(
      `https://randomuser.me/api/?page=${page}&results=3&seed=abc`
    );
    const users = data.results;
    setusers(users);
  };
  useEffect(() => {
    downloadUsers();
  }, [page]);

  




  

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
          
            <Switch
              height={35}
              width={70}
              
              uncheckedIcon={false}
              checkedIcon={false}
              onColor={"#00BEB8"}
              
            />
            <span className='text-2xl '>Switch Country</span>
          </div>
        </form>
      </div>

      {children}
      <div className=' botton-main-box'>
        <DownloadExcel
          data={users}
          buttonLabel={sample}
          fileName='sample-file'
          
          
        />
        {/* <DownloadButton /> */}

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
