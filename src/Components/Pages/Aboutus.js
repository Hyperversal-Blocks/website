import React from "react";
import { Container, Row } from "react-bootstrap";
import img1 from "../../Assets/img/about.png";
import Image from "react-bootstrap/Image";
import "./Pages.css";

function Aboutus() {
  // eslint-disable-next-line no-unused-vars
  const componentStyle = {
  height:"100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position:"relative",
    zIndex: 1,
   
  };

  
  return (
    <div id="about-us" >
      <div style={componentStyle} >
        <Container
          className="m-5"
          style={{
            backgroundColor: "white",

            borderRadius: "20px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Row>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div
                class="card"
                style={{ width: "20rem", padding: "2rem", border: "none" }}
              >
                <Image
                  src={img1}
                  style={{ borderRadius: "10px" }}
                  className="float-right"
                  width="100%"
                />
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
            <div style={{width:"40%"}}>
              <p className="text-justify text-center">
                <strong>
                  Within the realm of <span style={{ color: "#4c2881", fontWeight: "900" }}> Hyperversal Blocks </span>, every application is a
                  universe unto itself, vibrant with distinctive goals and
                  ambitions.
                </strong>
              </p>
              <p className="text-justify text-center">
                <strong>
                <span style={{ color: "#4c2881", fontWeight: "bold" }}>Averveil</span> is a multiverse that provides open-source tools for
                  private data sharing verification and data access.
                </strong>
              </p>
              </div>
            </div>
          </Row>
        </Container>
       
      </div>
    </div>
  );
}

export default Aboutus;
