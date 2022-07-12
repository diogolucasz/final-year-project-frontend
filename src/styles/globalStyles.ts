import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --dark-blue: #171923;
        --cyan: #81e6d9;
        --blue-900: #1a202c;
        --blue-700: #122036;
        --blue-background: #81e6d9;
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

    html {
        min-height: 100%;
        background: var(--blue-900);
    }

    *, button, input {
        //background: none;
        //border: 0;
    }

    ul {
        list-style: none;
    }

`