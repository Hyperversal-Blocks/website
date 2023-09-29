import React from "react";
import "./Root.css";
import Aboutus from "../Pages/Aboutus";
import Profile from "../Pages/Profile";

import { Link } from "react-scroll";
import logo from "../../Assets/img/18.jpg";
import Home from "../Pages/Home";

function Root() {
  return (
    <div className="bk-ground">
      <div class="l-navbar" id="nav-bar">
        <nav class="nav">
          <div>
            <Link
              class="nav_logo"
              to="home"
              style={{ color: "white", cursor: "pointer" }}
            >
              <i class="bx bx-layer nav_logo-icon"></i>
              <div class="header_img">
                {" "}
                <img src={logo} alt="" />{" "}
              </div>
            </Link>
            <div class="nav_list">
              <Link
                className="nav-link "
                class="nav_link active "
                to="home"
                style={{ color: "white", cursor: "pointer" }}
              >
                <span class="nav_name">Home</span>
              </Link>
              <Link
                className="nav-link"
                class="nav_link active bx bx-grid-alt"
                to="about-us"
                style={{ color: "white", cursor: "pointer" }}
              >
                <span class="nav_name">About Us</span>
              </Link>
              <Link
                className="nav-link"
                class="nav_link active bx bx-grid-alt"
                to="team"
                style={{ color: "white", cursor: "pointer" }}
              >
                <span class="nav_name">Team</span>
              </Link>
              <Link
                className="nav-link"
                class="nav_link active bx bx-grid-alt "
                to="contact-us"
                style={{ color: "white", cursor: "pointer" }}
              >
                <span class="nav_name">Contact Us</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div class="height-100 ">
        <Home />
        <Aboutus />
        <Profile />
      
      </div>
    </div>
  );
}

export default Root;
