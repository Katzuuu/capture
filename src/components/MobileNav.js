import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const variants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: "0%", opacity: 1, transition: { duration: "0.25" } },
  exit: { x: "100%", opacity: 0 },
};

const options = [
  { text: "1.About us", link: "/" },
  { text: "2.Our Work", link: "/ourwork" },
  { text: "3.Contact us", link: "/contactus" },
];

const MobileNav = ({ setIsOpen }) => {
  const pathname = useLocation().pathname;
  return (
    <Nav variants={variants} initial="initial" animate="animate" exit="exit">
      {options?.map((option, index) => (
        <Link
          style={
            pathname === option.link ? { color: "#23d997" } : { color: "black" }
          }
          className="link"
          key={index}
          onClick={() => setIsOpen(false)}
          to={option.link}
        >
          <li>{option.text}</li>
        </Link>
      ))}
    </Nav>
  );
};

const Nav = styled(motion.nav)`
  height: 100vh;
  width: 300px;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  .link {
    cursor: pointer;
    padding: 0;
    li {
      list-style: none;
      padding: 0;
      font-size: 30px;
      font-weight: 600;
    }
  }
`;

export default MobileNav;
