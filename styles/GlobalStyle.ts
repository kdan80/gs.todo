import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
    ${variables};

    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    /* Scrollbar Styles */
    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        transition: color 400ms ease-in-out;
    }

    button {
        cursor: pointer;
        background: none;
    }

    input, button {
        font-size: 1rem;
    }

    input {
        min-width: 0;
        background-color: transparent;

        &::placeholder {
            opacity: 1;
        }
    }
`;

export default GlobalStyle;
