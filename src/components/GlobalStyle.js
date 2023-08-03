import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }

    button {
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: #1b1b1b;;
        color: white;
        transition: all 0.5s ease;
        &:hover {
            background-color: #23d997;
            color: white;
        }
    }

    h2 {
            font-weight: lighter;
            font-size: 3rem;
            @media screen and (max-width: 1450px) {
                font-size: 35px;
            }
            @media screen and (max-width: 500px) {
                font-size: 28px;
            }
            @media screen and (max-width: 410px) {
                font-size: 25px;
            }
        }

    h3 {
        color: white;
    }

    h4 {
        font-weight: bold;
        font-size: 2rem;
        @media screen and (max-width: 1450px) {
                font-size: 35px;
            }
            @media screen and (max-width: 500px) {
                font-size: 28px;
            }
            @media screen and (max-width: 410px) {
                font-size: 20px;
            }
    }

    a {
        font-size: 1.1rem;
    }

    span {
        font-weight: bold;
        color: #23d997;
    }

    p {
        padding: 3rem 0rem;
        color:  #ccc;
        font-size: 1rem;
        line-height: 150%;
        @media screen and (max-width: 500px) {
            font-size: 0.8rem;
  }
    }
    .active {
        transform: translateX(-185px);
    }
    .activeTop {
        transform: rotate(45deg) translateY(10px);
    }
    .activeBottom {
        transform: rotate(-45deg) translateY(-9px);
    }
`;

export default GlobalStyle;
