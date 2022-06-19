import { createGlobalStyle } from "styled-components";
import zergBg from "../../images/zerg-bg.jpg";

export const GlobalStyle = createGlobalStyle`
    body {
        background: url(${zergBg}) center no-repeat;
        background-size: cover;
        color: #332c36;
        padding: 0;
        margin: 0;
        font-family: 'New Tegomin', serif;
    }
`;