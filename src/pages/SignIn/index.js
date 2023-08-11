import React from "react";
import styled from "styled-components";

function SignIn() {
    return (
        <SignWrap>
            <BackTop></BackTop>
            <BackBottom>
                <SignFormWrap></SignFormWrap>
            </BackBottom>
        </SignWrap>
    );
}

export default SignIn;

const SignWrap = styled.div`
    width: 100%;
`;

const BackTop = styled.div`
    width: 100%;
    height: 120px;
    background-image: url("https://kr.object.ncloudstorage.com/elderlinker/bg-top.png");
    background-size: 100%;
    background-position: center top;
    background-repeat: no-repeat;
`;
const BackBottom = styled.div`
    width: 100%;
    min-height: 590px;
    background-color: #fff8ed;
    background-image: url("https://kr.object.ncloudstorage.com/elderlinker/bg-center.png"),
        url("https://kr.object.ncloudstorage.com/elderlinker/bg-bottom.png");
    background-size: 100% calc(100% - 580px), 100% auto;
    background-position: center top, center bottom;
    background-repeat: no-repeat;
`;

const SignFormWrap = styled.div`
    width: 100%;
    margin: 0 auto;
`;
