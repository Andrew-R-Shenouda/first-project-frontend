import "./homepage.css";
import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div className="welcome-banner">
        <div className="ml-5 pt-5 p-1 welcome-banner-text"> Knowledge</div>
        <div className="ml-5 pt-3 welcome-banner-text">is Power</div>
        <div className="ml-5 pt-4 welcome-banner-subtext">
          And so is Crypto. Build a dashboard to track your favorite currencies
          right here.
        </div>
      </div>
      <div className="btn-container">
        <Link to="/get-started" className="btn get-started-button pt-2">
          Get Started
        </Link>
      </div>
    </>
  );
}
export default Homepage;
