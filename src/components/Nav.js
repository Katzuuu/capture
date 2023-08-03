import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";

const Nav = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledNav>
      <h1>
        <Link onClick={() => setIsOpen(false)} id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "62%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/ourwork">2. Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/ourwork" ? "56%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contactus">3. Contact us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contactus" ? "52%" : "0%" }}
          />
        </li>
      </ul>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`burger ${isOpen && "active"}`}
      >
        <div className={`line ${isOpen && "activeTop"}`}></div>
        <div className={`line ${isOpen && "activeBottom"}`}></div>
      </div>
      {isOpen && <div className="black"></div>}
      <AnimatePresence>
        {isOpen && <MobileNav setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  max-height: 80px;
  z-index: 10;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: fixed;
  width: 100%;
  top: 0;
  @media screen and (max-width: 1150px) {
    padding: 1rem 2rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    @media screen and (max-width: 770px) {
      display: none;
    }
  }
  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }
  .burger {
    transition: all 250ms ease-in-out;
    z-index: 100;
    display: none;
    height: 60px;
    width: 50px;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    @media screen and (max-width: 770px) {
      display: flex;
    }
  }
  .line {
    width: 100%;
    height: 4px;
    border-radius: 4px;
    transition: all 250ms ease-in-out;
    background-color: #23d997;
  }
  .black {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: -10;
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  background-color: #23d997;
  width: 0%;
  position: absolute;
  bottom: -45%;
  left: 45%;
`;

export default Nav;
