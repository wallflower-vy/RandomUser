import React from "react";
import { BiCloudDownload } from "react-icons/bi";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import PaginationComponent from "../../PaginationComponent";
import "./index.css";

const DownloadButton = () => {
  return (
    <div className='bottom-btn-box'>
      <div className='download-btn-box'>
        <button className='download-btn py-3 px-7 text-white text-xl font-bold'>
          <BiCloudDownload className='icon' /> Download Results
        </button>
      </div>
     
    </div>
  );
};

export default DownloadButton;
