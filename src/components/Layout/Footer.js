import React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <FooterWrap>
            Copyright 2023. elderlinker all rights reserved.
        </FooterWrap>
    );
}

export default Footer;

const FooterWrap = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    height: 130px;
    padding: 0 60px;
    background-color: #ededed;
    color: #a3a3a3;
    font-size: 1.4rem;
    position: absolute;
    bottom: 0;
`;
