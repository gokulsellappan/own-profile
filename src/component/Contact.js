import React from "react";
import styled from "styled-components";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";

function Contact() {
  return (
    <Container id="contact">
      <ContactUs>
        <ContactUsTitle>
          <span>Contact Us</span>
        </ContactUsTitle>
        <ContactDetail>
          <EmailIcon fontSize="large" />
          <span>gokulsellappan@gmail.com</span>
        </ContactDetail>
        <ContactDetail>
          <LocationOnIcon fontSize="large" />
          <span>Chennai,India</span>
        </ContactDetail>
        <ContactDetail>
          <CallIcon fontSize="large" />
          <span>+91 8098024466</span>
        </ContactDetail>
      </ContactUs>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  display: black;
  background-color: #f4f6f9;
  padding: 112px 0 112px 0;
  scroll-behavior: smooth;
  @media (max-width: 768px) {
    padding: 90px 0 90px 0;
    height: 100%;
    width: 100%;
  }
`;
const ContactUs = styled.div`
  padding: 0 0 48px 0;
  margin: 0 0 0 93px;
  justify-content: center;
  background-color: #f4f6f9;
`;
const ContactUsTitle = styled.div`
  height: 96px;
  justify-content: center;
  background-color: #f4f6f9;
  span {
    font-size: 40px;
    font-weight: 700;
    height: 48px;
    margin: 0 0 48px 0;
    text-align: center;
    text-transform: uppercase;
    border-bottom: solid #0dc991;
    background-color: #f4f6f9;
  }
`;
const ContactDetail = styled.div`
  height: 96px;
  background-color: #f4f6f9;
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  span {
    text-align: center;
    background-color: #f4f6f9;
    font-size: 20px;
    font-weight: 400;
    height: 48px;
    text-align: center;
    justify-content: center;
    margin: 8px 0 0 8px;
  }
`;
