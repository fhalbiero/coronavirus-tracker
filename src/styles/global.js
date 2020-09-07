import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        height: 100vh;
        margin: 0 auto;
        background-color: #2f3136;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        background-image: linear-gradient(rgba(47,49,54,.7), rgba(47,49,54,.7)), url("/assets/images/bg_code.jpg");
        background-size: cover;
        color: #f9f9f9;
        -webkit-font-smoothimg: antialiased;
    }

    a {
        text-decoration: none;
        color: #f9f9f9;
        cursor: pointer;
    }

    body, input, button {
        font-family: 'Roboto', serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }

`;

export const Container = styled.div`
    width: 100%;
    overflow: hidden;
`;