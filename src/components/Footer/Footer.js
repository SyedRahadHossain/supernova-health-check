import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-primary p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex justify-content-center align-content-center">
                <h3 className="text-white text-start">
                  Supernova Health Check
                  <br />
                  <span className="fs-6">
                    Best value health check <br />
                    Be a member <br />
                    Get discount up to 40%
                  </span>
                </h3>
              </div>
            </div>
            <div className="col-md-2">
              <div className="d-flex flex-column align-items-center">
                <div className="">
                  <h3 className="text-white me-2">
                    <i className="fab fa-twitter-square"></i>
                  </h3>
                  <h3 className="text-white me-2">
                    <i className="fab fa-facebook-square"></i>
                  </h3>
                  <h3 className="text-white me-2">
                    <i className="fab fa-youtube-square"></i>
                  </h3>
                  <h3 className="text-white me-2">
                    <i className="fab fa-instagram-square"></i>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center">
                <NavLink className="fs-6 text-white" to="/home">
                  Home
                </NavLink>
                <NavLink className="fs-6 text-white" to="/home">
                  Services
                </NavLink>
                <NavLink className="fs-6 text-white" to="/about">
                  About Us
                </NavLink>
                <NavLink className="fs-6 text-white" to="/membership">
                  Membership
                </NavLink>
              </div>
            </div>
          </div>
          <br />
        </div>
        <small className="text-white ">© copyright to Supernova 2021</small>
      </div>
    </div>
  );
};

export default Footer;
