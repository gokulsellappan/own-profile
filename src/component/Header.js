import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-scroll";
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <Content>
        <LeftMenu>
          <ContextMenu onClick={() => setBurgerStatus(true)} />
          <Menu>
            <span>Menu</span>
          </Menu>
        </LeftMenu>
        <Name>
          <a>Gokul</a>
        </Name>
        <Mail>
          <span>gokulsellappan3@gmail.com</span>
        </Mail>
      </Content>
      <BurgarNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={1000}
            onClick={() => setBurgerStatus(false)}
          >
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            onClick={() => setBurgerStatus(false)}
          >
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            smooth={true}
            duration={1000}
            onClick={() => setBurgerStatus(false)}
          >
            <span>Porfolio</span>
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            onClick={() => setBurgerStatus(false)}
          >
            <span>Contact</span>
          </Link>
        </li>
      </BurgarNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  align-items: center;
  min-height: 60px;
  justify-content: space-between;
  padding: 2.25rem 3.125rem;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  width: 100%;
`;

const ContextMenu = styled(MenuIcon)`
  cursor: pointer;
  margin-right: 8px;
`;

const Menu = styled.div`
  align-items: center;
  display: flex;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 500;
  span {
    width: 249px;
    height: 30px;
    text-align: left;
  }
`;
const Name = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #0f0f1b;
    text-decoration: none;
    font-weight: 700;
    font-size: 30px;
  }
`;

const Mail = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
  span {
    width: 350px;
    height: 30px;
    text-align: right;
  }
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
`;
const BurgarNav = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  display: flex;
  width: 300px;
  z-index: 16;
  list-style: none;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  height: 726px;
  overflow: hidden;
  li {
    span {
      display: inline-block;
      color: #000;
      text-decoration: none;
      cursor: pointer;
      padding: 15px 0;
      font-weight: 700;
      font-size: 24px;
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
  }

  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(-100%)`)};
  transition: transform 0.2s ease-in;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
