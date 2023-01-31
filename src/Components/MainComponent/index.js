import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent";
import LeftComponent from "../LeftComponent";
import ProfileComponent from "../ProfileComponent";
import RightComponent from "../RightComponent";
import "./index.css";

const MainComponent = () => {
  const [page, setpage] = useState(1);
  const [query, setquery] = useState("");
  const [details, setDetails] = useState(false);

  const [active, setActive] = useState({
    allUser: true,
    maleUser: false,
    femaleUser: false,
    profile: false,
  });

  const handleNext = () => {
    setpage(page + 1);
  };
  const handleprevious = () => {
    setpage(page - 1);
  };

  const fetchUsers = async () => {
    setActive({
      allUser: true,
      maleUser: false,
      femaleUser: false,
      profile: false,
    });
    const { data } = await axios.get(
      `https://randomuser.me/api/?page=${page}&results=3&seed=abc`
    );
    const details = data.results;
    setDetails(details);
  };
  useEffect(() => {
    fetchUsers();
  }, [page]);

  const GetActiveSreen = ({ getProfileDetails }) => {
    if (active.allUser) {
      return (
        <CardComponent
          details={details}
          getProfileDetails={getProfileDetails}
        />
      );
    }
    if (active.maleUser) {
      return (
        <CardComponent
          details={details}
          getProfileDetails={getProfileDetails}
        />
      );
    }
    if (active.femaleUser) {
      return (
        <CardComponent
          details={details}
          getProfileDetails={getProfileDetails}
        />
      );
    }
    if (active.profile) {
      return (
        <ProfileComponent
          details={details}
          index={active.index}
          Goback={Goback}
        />
      );
    }
  };

  const getMaleuser = async () => {
    setActive({
      allUser: false,
      maleUser: true,
      femaleUser: false,
      profile: false,
    });
    const { data } = await axios.get(
      "https://randomuser.me/api/?gender=male&results=3"
    );
    setDetails(data.results);
  };

  const getfeMaleuser = async () => {
    setActive({
      allUser: false,
      maleUser: false,
      femaleUser: true,
      profile: false,
    });
    const { data } = await axios.get(
      "https://randomuser.me/api/?gender=female&results=3"
    );
    setDetails(data.results);
  };

  const getProfileDetails = (index) => {
    setActive({
      allUser: false,
      maleUser: false,
      femaleUser: false,
      profile: true,
      index: index,
    });
  };

  const Goback = () => {
    setActive({
      allUser: true,
      maleUser: false,
      femaleUser: false,
      profile: false,
    });
  };

  const handlechange = (e) => {
    setquery(e.target.value);
  };
  console.log(query);

  return (
    <>
      <div className='main-component '>
        <div className='mini-component  '>
          <LeftComponent
            getfeMaleuser={getfeMaleuser}
            getMaleuser={getMaleuser}
            fetchUsers={fetchUsers}
            handlechange={handlechange}
          />
          <RightComponent
            handleNext={handleNext}
            handleprevious={handleprevious}
          >
            <GetActiveSreen getProfileDetails={getProfileDetails} />
          </RightComponent>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
