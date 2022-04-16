import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --dark-blue: #061121;
        --blue-900: #0b1426;
        --blue-700: #122036;
        --blue-background: #0d1117;
        --blue-300: #1199fa;
        --gray-100: #d1d0d1;
        --rosa: #E82D92;
        --background: #202024;
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