import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --blue-900: #171923;
        --cyan: #81e6d9;
        --blue-600: #1a202c;
        --blue-700: #122036;
        --blue-300: #1199fa;
        --gray-100: #d1d0d1;
        --rosa: #E82D92;
        --background: #81e6d9;
        --white: #f4f4f4;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1080px){
    html {
      font-size: 93.75%;
    }
    }   
    @media (max-width: 720px){
        html {
            font-size: 87.5%;
        }
    }      

    body {
    background: var(--blue-900);
    color: var(--white);
    }

    body, input, textarea, select, button {
        font: 300 1rem 'Inter', sans-serif;
    }

    ul {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

`