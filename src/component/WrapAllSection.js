import React from "react";
import FirstPage from "./FirstPage";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import styled from "styled-components";

function WrapAllSection() {
  return (
    <WrapAll>
      <FirstPage />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </WrapAll>
  );
}

export default WrapAllSection;

const WrapAll = styled.div``;
