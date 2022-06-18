import React from "react";
import Home from "./Home";
import Header from "./Header";
import styled from "styled-components";

function FirstPage(props) {
  return (
    <First>
      <Header />
      <Home />
    </First>
  );
}

export default FirstPage;

const First = styled.div`
  width: 100%;
  height: 100%;
`;
