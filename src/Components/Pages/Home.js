import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../Assets/img/Vector1.png";
import Image from "react-bootstrap/Image";
import "./Pages.css";

function Home() {
  // eslint-disable-next-line no-unused-vars
  const componentStyle = {
    height:"100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // CSS for the overlapping image div
  const imageDivStyle = {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: "60%", // Adjust the width as needed
    zIndex: 1, // Make sure it appears above the first container
  };

  return (
    <div id="home">
      <div style={componentStyle}>
        <Container
          fluid
          className="homepage-patter pt-5 m-5"
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.8)",
            position: "relative", // Add position relative to allow overlapping
          }}
        >
          <Row>
            <Col
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={8}
            >
            <div style={{width:"50%"}}>

                         <p
                style={{ fontSize: "25px", fontWeight: "900" }}
                className="text-justify text-center"
              >
                "I want to Put a ding in the universe"
              </p>
              <p className="text-justify text-center">
                <strong>Steve Jobs</strong>
              </p>
              </div>
 </Col>
          </Row>
        </Container>
        {/* Overlapping Image Div */}
        <div style={imageDivStyle}>
          <Image
            src={img1}
            style={{ borderRadius: "10px" }}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;