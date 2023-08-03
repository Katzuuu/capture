import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// icons
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import {
  titleAnim2,
  fade,
  scale,
  line,
  socials,
  socials2,
  line2,
} from "../animation";

const ContactUs = () => {
  return (
    <Container>
      <Blur>
        <div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2 variants={titleAnim2} initial="hidden" animate="show">
              Get In Touch.
            </motion.h2>
          </div>
          <Line2 variants={line2} initial="hidden" animate="show" />
          <div style={{ overflow: "hidden" }}>
            <motion.div
              variants={socials2}
              initial="hidden"
              animate="show"
              className="socialsSmall"
            >
              <Link to={"https://www.facebook.com/"}>
                <AiOutlineFacebook className="cp" size={70} />
              </Link>
              <Link to={"https://www.instagram.com/"}>
                <AiOutlineInstagram className="cp" size={70} />
              </Link>
              <Link to={"https://www.youtube.com/"}>
                <AiOutlineYoutube className="cp" size={70} />
              </Link>
            </motion.div>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <motion.input
              variants={fade}
              initial="hidden"
              animate="show"
              type="text"
              placeholder="email"
            />
            <motion.input
              variants={fade}
              initial="hidden"
              animate="show"
              type="text"
              placeholder="subject"
            />
            <motion.textarea
              variants={fade}
              initial="hidden"
              animate="show"
              name="message"
              placeholder="message"
              cols="30"
              rows="10"
            ></motion.textarea>
            <motion.button variants={scale} initial="hidden" animate="show">
              Send
            </motion.button>
          </form>
        </div>
        <Line variants={line} initial="hidden" animate="show" />
        <div style={{ overflow: "hidden" }}>
          <motion.div
            variants={socials}
            initial="hidden"
            animate="show"
            className="socials"
          >
            <Link to={"https://www.facebook.com/"}>
              <AiOutlineFacebook className="cp" size={70} />
            </Link>
            <Link to={"https://www.instagram.com/"}>
              <AiOutlineInstagram className="cp" size={70} />
            </Link>
            <Link to={"https://www.youtube.com/"}>
              <AiOutlineYoutube className="cp" size={70} />
            </Link>
          </motion.div>
        </div>
      </Blur>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url("/contactBg.webp");
  h1 {
    padding-top: 80px;
  }
`;

const Blur = styled.div`
  margin: auto;
  padding-top: 80px;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media screen and (max-width: 600px) {
    gap: 0;
  }
  h2 {
    font-size: 60px;
    margin-bottom: 40px;
    text-align: right;
    @media screen and (max-width: 600px) {
      margin-bottom: 20px;
    }
    @media screen and (max-width: 450px) {
      font-size: 40px;
      text-align: center;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      padding: 10px;
      margin-bottom: 5px;
      &:focus {
        outline-color: #24d997;
      }
    }
    textarea {
      padding: 10px;
      &:focus {
        outline-color: #24d997;
      }
    }
    button {
      margin-top: 10px;
      background: transparent;
      transition: color 250ms ease;
      &:hover {
        background-color: #24d997;
      }
    }
  }
  .socials {
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    a {
      color: white;
    }
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  .socialsSmall {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 20px;
    a {
      color: white;
    }
    @media screen and (min-width: 601px) {
      display: none;
    }
  }
  .cp {
    transition: all 250ms ease-in-out;
    cursor: pointer;
    &:hover {
      color: #24d997;
      transform: scale(1.1);
    }
  }
`;

const Line = styled(motion.div)`
  width: 10px;
  height: 60vh;
  background-color: #24d997;
  border-radius: 10px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Line2 = styled(motion.div)`
  height: 10px;
  width: 100%;
  background-color: #24d997;
  border-radius: 10px;
  @media screen and (min-width: 601px) {
    display: none;
  }
`;

export default ContactUs;
