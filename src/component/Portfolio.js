import React from "react";
import styled from "styled-components";

function Portfolio() {
  return (
    <Container id="portfolio">
      <Project>
        <ProjectTitle>
          <span>My Porfolio</span>
        </ProjectTitle>
        <ProjectContainer>
          <ProjectBox>
            <img src="/images/Exchange.png" alt="" />
            <Content>
              <TitleOne>
                <span>Exchange </span>
              </TitleOne>
              <TitleContent>Trade</TitleContent>
            </Content>
          </ProjectBox>
          <ProjectBox>
            <img src="/images/LinkedIn.png" alt="" />
            <Content>
              <TitleOne>
                <span>Twitter </span>
              </TitleOne>
              <TitleContent>Social Media</TitleContent>
            </Content>
          </ProjectBox>
          <ProjectBox>
            <img src="/images/Game.png" alt="" />
            <Content>
              <TitleOne>
                <span>Game </span>
              </TitleOne>
              <TitleContent>NFT</TitleContent>
            </Content>
          </ProjectBox>
        </ProjectContainer>
      </Project>
    </Container>
  );
}

export default Portfolio;

const Container = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  display: black;
  padding: 112px 0 112px 0;
  @media (max-width: 768px) {
    padding: 90px 0 90px 0;
    height: 100%;
    width: 100%;
  }
`;

const Project = styled.div``;

const ProjectTitle = styled.div`
  height: 96px;
  padding: 0 0 48px 0;

  span {
    font-size: 40px;
    font-weight: 700;
    height: 48px;
    margin: 0 0 48px 0;
    text-align: center;
    text-transform: uppercase;
    border-bottom: solid #0dc991;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
`;

const ProjectBox = styled.div`
  margin: 24px 12px 24px 12px;
  padding: 0 0 0 80px;
  display: flex;
  height: 250px;
  width: 400px;
  flex-direction: column;
  img {
    width: 100%;
    height: 100%;
    display: flex;
    cursor: Pointer;
    objectfit: cover;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  cursor: Pointer;
`;

const TitleOne = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 700;
  position: relative;
  span {
    display: inline-block;
    color: #000;
    text-decoration: none;
  }
  span::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width 0.3s;
  }
  span:hover::after {
    width: 100%;
  }
`;

const TitleContent = styled.div`
  display: flex;
  color: #909db7;
`;
