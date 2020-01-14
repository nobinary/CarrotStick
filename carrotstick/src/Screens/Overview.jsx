import React from "react";
import "./../styles/Overview.css";
import Footer from "./../components/Footer";
import Header from './../components/Header'
import Status from './../components/Status'
import Quote from './../components/Quote'
import Badges from './../components/Badges'

const Overview = () => {
  return (
    <div className="overview">
      <Header header="Overview"/>
      <div className='ov_body'>
          <Status/>
          <Quote/>
          <Badges/>
      </div>
      <Footer />
    </div>
  );
};

export default Overview;
