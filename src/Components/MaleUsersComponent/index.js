import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardComponent from '../CardComponent';
import './index.css'


const MaleUsersComponnet = () => {
    const [details, setDetails] = useState(false);

    const fetchmaleUsers = async () => {
      const { data } = await axios.get("https://randomuser.me/api/?gender=male");
      console.log(data)
    //   const details = data.results;
    //   setDetails(details);
      // console.log(details);
      // console.log(setDetails(details))
    };
    useEffect(() => {
      fetchmaleUsers();
    }, []);
  



  return (
    <div>
        {/* <CardComponent /> */}
    </div>
  )
}

export default MaleUsersComponnet