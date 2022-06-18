import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

function Home() {
  return (
    <Container id="home">
      <Section>
        <Profile>
          <div>
            <img src="/images/gokul.jpg" alt="" />
          </div>
        </Profile>
        <Content>
          <Subcontent>
            <AnimationContent>
              <span>
                <Typewriter
                  options={{
                    strings: ["BlockChainDeveloper", "QA Engineer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </AnimationContent>
            <NameContent>I'm Gokul Sellappan</NameContent>
            <Link to="portfolio" smooth={true} duration={1000}>
              <PortfolioButton >My Portfolio</PortfolioButton>
            </Link>
          </Subcontent>
        </Content>
      </Section>
      <ScrollDown>
        <ScrollText>Scroll Down</ScrollText>
        <Link to="about" smooth={true} duration={1000}>
          <ScrollButton>
            <ScrollMouse>
              <Scroller />
            </ScrollMouse>
          </ScrollButton>
        </Link>
      </ScrollDown>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 112px 0 112px 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 12px 0 12px;
  }
`;
const Section = styled.div`
  width: 100%;
  height: 356px;
  margin: 12px 12px 0 12px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding-top: 120px;
    padding-left: 70px;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;
const Profile = styled.div`
  width: 356px;
  height: 380px;
  padding: 0 12px 0 12px;
  line-height: 24px;
  min-width: auto;
  min-height: auto;
  max-width: 100%;
  display: block;

  div {
    display: flex;
    height: 356px;
    width: 356px;
    justify-content: center;
    @media (max-width: 768px) {
      height: 100%;
      width: 100%;
    }
    img {
      border-radius: 70%;
      transform: matrix(1, 0, 0, 0, 1, 0, 0);
      transition: opaciity 0.8s ease 0s,
        transform 0.8s ease 0s -webkt-transform 0.8s ease 0s;
    }
  }
`;

const Content = styled.div`
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  height: 356px;
  width: 380px;
  margin: 0-12px 0-12px;
  display: flex;
`;
const Subcontent = styled.div`
  text-align: right;
  height: 298px;
  width: 356px;
  min-height: auto;
  max-height: auto;
  display: block;
`;
const AnimationContent = styled.div`
  font-size: 24px;
  line-height: 36px;
  text-align: right;
  height: auto;
  width: auto;
  display: inline;
`;

const NameContent = styled.div`
  font-size: 64px;
  font-weight: 700;
  line-height: 76.8px;
  text-decoration: none;
  text-align: right;
  height: 154px;
  width: 356px;
  margin: 0 0 48px 0;
`;

const PortfolioButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  background-color: #0dc991;
  color: #ffffff;
  height: 45px;
  width: 153px;
  border: 1px solid #0dc991;
  padding: 10px 27px 10px 27px;
  display: iinline-block;
  cursor: pointer;
`;

const ScrollDown = styled.div`
  padding: 12px 0 12px 0;
  margin-top: 30px;
`;

const ScrollText = styled.div`
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 8px;
`;

const ScrollButton = styled.div`
  position: relative;
  margin: auto;
  align-item: center;
  width: 34px;
  height: 55px;
`;

const ScrollMouse = styled.div`
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid #212529;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
  cursor: pointer;
`;
const Scroller = styled.div`
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #212529;
  animation-name: scroll;
  animation: scroll infinite 1.5s;
`;
