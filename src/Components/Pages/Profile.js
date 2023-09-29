import React from "react";
import "./Pages.css";

import shahbaz from "../../Assets/img/shahbaz.jpg";
import ammar from "../../Assets/img/ammar.jpg";
import iqra from "../../Assets/img/Iqra.jpg";
import omer from "../../Assets/img/omer.jpg";
import haseeb from "../../Assets/img/Haseeb.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";

function Profile() {
  const componentStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const profiles = [
    {
      id: 1,
      name: "SHAHBAZ KHAN",
      jobTitle: "Web Developer",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      icon: shahbaz,
    },
    {
      id: 2,
      name: "HASEEB ASJAD",
      jobTitle: "Graphic Designer",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      icon: haseeb,
    },
    {
      id: 3,
      name: "IQRA HASEEB",
      jobTitle: "Software Engineer",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      icon: iqra,
    },
    {
      id: 4,
      name: "AMMAR",
      jobTitle: "Software Engineer",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      icon: ammar,
    },
    {
      id: 5,
      name: "OMER",
      jobTitle: "Software Engineer",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      icon: omer,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="team" style={componentStyle}>
      <Container
        className="m-5"
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Carousel
          responsive={responsive}
          autoPlay={true} // Enable auto play
          autoPlaySpeed={3000} // Set the auto play speed in milliseconds (e.g., 3000ms = 3 seconds)
          infinite={true}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          ssr={true}
          customLeftArrow={<></>}
          customRightArrow={<></>}
        >
          {profiles.map((profile) => (
            <div
              class="card"
              style={{
                width: "10rem",
                borderRadius: "20px",
                margin: "20px", // Add margin here
                background: "#4c2881",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div key={profile.id} className="profile-item">
                <img
                  class="card-img-top"
                  src={profile.icon}
                  alt={profile.name}
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                />
                <br/>
                <div className="profile-details">
                <br/>
                  <h3 style={{ color: "white", fontSize: "18px" }}>
                    {profile.name}
                  </h3>
                  <p style={{ color: "white", fontSize: "13px" }}>
                    {profile.jobTitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default Profile;
