import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Content>
        <SocialIcon>
          <FaceBook>
            <span>f</span>
          </FaceBook>
          <LinkedIn>
            <span>in</span>
          </LinkedIn>
          <Git>
            <span>git</span>
          </Git>
        </SocialIcon>
      </Content>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  height: 173px;
  padding: 24px 0 24px 0;
  display: block;
`;

const Content = styled.div`
  height: 125px;
  padding: 16px 0 16px 0;
  display: flex;
  justify-content: center;
  margin: 0 50px 0 50px;
`;

const SocialIcon = styled.div`
  height: 45px;
  margin: 0 0 48px 0;
  display: flex;
`;

const FaceBook = styled.div`
  height: 45px;
  width: 45px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #0dc991;
  text-align: center;
  padding: 8px 8px 8px 8px;
  margin-right: 8px;
  span {
    color: white;
    background: transparent;
    height: 16px;
    width: 10px;
    top: 8px;
    font-size: 18px;
    font-weight: 700;
  }
`;

const LinkedIn = styled.div`
  height: 45px;
  width: 45px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #0dc991;
  text-align: center;
  padding: 8px 8px 8px 8px;
  margin-right: 8px;
  span {
    color: white;
    background: transparent;
    height: 16px;
    width: 10px;
    top: 8px;
    font-size: 18px;
    font-weight: 700;
  }
`;

const Git = styled.div`
  height: 45px;
  width: 45px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #0dc991;
  text-align: center;
  padding: 8px 8px 8px 8px;
  margin-right: 8px;
  span {
    color: white;
    background: transparent;
    height: 16px;
    width: 10px;
    top: 8px;
    font-size: 16px;
    font-weight: 700;
  }
`;
