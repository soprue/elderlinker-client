import React from "react";
import { styled } from "styled-components";

function Header() {
    return (
        <HeaderWrap>
            <LogoWrap>
                <a href="/">
                    <img
                        src="https://kr.object.ncloudstorage.com/elderlinker/logo-horizontal.png"
                        alt="logo"
                    ></img>
                </a>
            </LogoWrap>
            <NavWrap></NavWrap>
            <ButtonWrap>
                <a href="">
                    <button>로그인</button>
                </a>
            </ButtonWrap>
        </HeaderWrap>
    );
}

export default Header;

const HeaderWrap = styled.header`
    height: 90px;
`;

const LogoWrap = styled.div``;

const NavWrap = styled.nav``;

const ButtonWrap = styled.div``;
