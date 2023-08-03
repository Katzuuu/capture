import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Import images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// Animations
import { motion } from "framer-motion";
import {
  fade,
  photoAnim,
  pageAnimation,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";
// Import scrolltop
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <FrameContainer variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </FrameContainer>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/ourwork/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls}>
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/ourwork/the-racer">
          <img src={theracer} alt="racer" />
        </Link>
      </Movie>
      <Movie ref={element2} variants={fade} animate={controls2}>
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/ourwork/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 8rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media screen and (max-width: 1100px) {
    padding: 8rem 5rem;
  }
  @media screen and (max-width: 800px) {
    padding: 8rem 2rem;
  }
  @media screen and (max-width: 600px) {
    padding: 8rem 0.8rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  @media screen and (max-width: 800px) {
    padding-bottom: 3rem;
  }
  .line {
    height: 0.3rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    @media screen and (max-width: 800px) {
      height: 50vh;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

// Frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background-color: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;

// Frame container
const FrameContainer = styled(motion.div)``;

export default OurWork;
