import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --dark-blue: #061121;
        --blue-900: #010917;
        --gray-100: #f4f4f4;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        min-height: 100%;
        background: var( --blue-900);
    }

    *, button, input {
        //background: none;
        //border: 0;
    }

    ul {
        list-style: none;
    }

`