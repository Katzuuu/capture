import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media screen and (max-width: 1150px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 800px) {
    padding: 5rem 4rem;
  }
  @media screen and (max-width: 600px) {
    padding: 3rem 1rem;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media screen and (max-width: 1450px) {
    h2 {
      font-size: 35px;
    }
  }
  @media screen and (max-width: 1150px) {
    text-align: center;
    max-width: 70%;
    padding-right: 0;
    padding-top: 5rem;
  }
  @media screen and (max-width: 500px) {
    h2 {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 410px) {
    h2 {
      font-size: 25px;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  @media screen and (max-width: 1150px) {
    width: 90%;
    img {
      height: 50vh;
      object-fit: cover;
      object-position: center center;
    }
  }
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
