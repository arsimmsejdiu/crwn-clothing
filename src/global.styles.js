import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Open Sans Condensed";
        padding: 20px 60px;
        
        @media screen and(max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }

    .top-bar{
        width: 100%;
        height: 30px;
        overflow-x: hidden;
        background-color: #fdf2f2;
        margin: 0;
        padding: 0;
    }
`;
