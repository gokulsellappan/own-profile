import React from "react";
import styled from "styled-components";

function AboutMe() {
  return (
    <Container id="about">
      <DataSet>
        <AboutMyself>
          <SelfData>
            <Name>I'm Gokul</Name>
            <Description>
              Hi! There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even
              slightly believable.
            </Description>
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

            <Download>
              <a href="/download/Gokul_Sellappan.pdf">Download CV</a>
            </Download>
          </SelfData>
        </AboutMyself>
        <SkillSet>
          <SelfSkill>
            <SkillTitle>My Skills</SkillTitle>
            <FirstSkill>
              <span>Solidity 70%</span>
              <progress value="70" max="100" />
            </FirstSkill>
            <FirstSkill>
              <span>web3.js 70%</span>
              <progress value="70" max="100" />
            </FirstSkill>
            <FirstSkill>
              <span>Quality Assurance 90%</span>
              <progress value="90" max="100" />
            </FirstSkill>
          </SelfSkill>
        </SkillSet>
      </DataSet>
    </Container>
  );
}

export default AboutMe;

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
  background-color: #f4f6f9;
  @media (max-width: 768px) {
    padding: 90px 0 90px 0;
    height: 100%;
    width: 100%;
  }
`;

const DataSet = styled.div`
  background-color: #f4f6f9;
  height: 100%;
  width: 100%;
  margin: 0 12px 48px 12px;
  display: flex;
  @media (max-width: 768px) {
    padding-left: 70px;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

const AboutMyself = styled.div`
  background-color: #f4f6f9;
  margin: 0 0 0 93px;
  min-width: auto;
  max-width: auto;
  display: flex;
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    margin: 0 0 0 0;
  }
`;

const SelfData = styled.div`
  margin: 0 0 0 108px;
  padding: 0 12px 0 12px;
  display: block;
  width: 465px;
  align-item: left;
  background-color: #f4f6f9;
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    margin: 0 0 0 0;
  }
`;

const Name = styled.div`
  margin: 0 0 48px 0;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  display: block;
  text-align: left;
  background-color: #f4f6f9;
`;

const Description = styled.div`
  background-color: #f4f6f9;
  margin: 0 0 48px 0;
  text-align: left;
  color: #909db7;
`;

const SocialIcon = styled.div`
  height: 45px;
  margin: 0 0 48px 0;
  display: flex;
  background-color: #f4f6f9;
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

const Download = styled.button`
  display: flex;
  align-items: flex-start;
  height: 46px;
  width: 167px;
  padding: 10px 27px 10px 27px;
  border: 1px solid #0dc991;
  cursor: pointer;
  background-color: #f4f6f9;
  &:hover {
    background-color: #0a996e;
    a{
      color:white;
      background: transparent;
    }
  }
  a {
    font-size: 16px;
    font-weight: 700;
    text-decoration:none;
    color: #0dc991;
    background: transparent;
    }
  }
`;

const SkillSet = styled.div`
  margin: 0 0 0 93px;
  min-width: auto;
  max-width: auto;
  display: flex;
  background-color: #f4f6f9;
  @media (max-width: 768px) {
    padding: 50px 0 0 0;
    position: relative;
    margin: 0 0 0 0;
  }
`;
const SelfSkill = styled.div`
  padding: 0 12px 0 12px;
  display: block;
  width: 465px;
  align-item: left;
  background-color: #f4f6f9;
`;
const SkillTitle = styled.div`
  margin: 0 0 48px 0;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  display: block;
  text-align: left;
  background-color: #f4f6f9;
`;

const FirstSkill = styled.div`
  margin: 0 0 24px 0;
  text-align: left;
  height: 50px;
  background-color: #f4f6f9;

  span {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
    display: flex;
    background-color: #f4f6f9;
  }
  progress {
    width: 100%;
    height: 10px;
    display: flex;
    text-align: center;
    top: 0;
    left: 0;
  }
  progress {
    background: black;
  }
  progress::-webkit-progress-value {
    background: #0dc991;
    transition: 1s ease;
    transition-delay: 0.5s;
  }
  progress::-webkit-progress-bar {
    background: black;
  }
`;
