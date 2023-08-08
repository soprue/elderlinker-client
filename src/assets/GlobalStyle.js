import { createGlobalStyle } from "styled-components";

import fontRegular from "../assets/fonts/SCDream4.otf";
import fontMedium from "../assets/fonts/SCDream5.otf";
import fontBold from "../assets/fonts/SCDream8.otf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SCDream';
        src: url(${fontRegular}) format('opentype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'SCDream';
        src: url(${fontMedium}) format('opentype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'SCDream';
        src: url(${fontBold}) format('opentype');
        font-weight: 600;
        font-style: normal;
    }
    
    body {
        font-family: "SCDream";
        font-weight: 400;
    }
`;

export default GlobalStyle;
