import React from "react";
import styled from "styled-components";
import { textColor, secondaryColor } from "../../styles/colors";

import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";

function SignIn() {
    return (
        <SignWrap>
            <BackTop></BackTop>
            <BackBottom>
                <SignFormWrap>
                    <Title>로그인</Title>
                    <InputWrap>
                        <InputName>아이디</InputName>
                        <InputBox>
                            <MdEmail color="#555" size={20} />
                            <Input
                                type="text"
                                id=""
                                placeholder="example"
                            ></Input>
                        </InputBox>
                    </InputWrap>
                    <InputWrap>
                        <InputName>비밀번호</InputName>
                        <InputBox>
                            <FaKey color="#555" size={20} />
                            <Input
                                type="password"
                                id=""
                                placeholder="password"
                            ></Input>
                        </InputBox>
                    </InputWrap>
                    <SubmitButton>로그인</SubmitButton>
                </SignFormWrap>
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

const SignFormWrap = styled.form`
    width: 1200px;
    text-align: center;
    padding: 60px 0;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 15px;
`;

const Title = styled.p`
    font-size: 3.6rem;
    font-weight: 500;
    color: ${textColor};
`;

const InputWrap = styled.div`
    width: 600px;
    margin: 0 auto;
    text-align: left;

    & + & {
        margin-top: 20px;
    }
`;

const InputName = styled.p`
    color: ${textColor};
    font-weight: 500;
    margin-bottom: 5px;
`;

const InputBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 20px 30px;
`;

const Input = styled.input`
    height: 100%;
    margin-left: 20px;
    color: ${textColor};
    font-weight: 400;

    &::placeholder {
        color: #ccc;
    }
`;

const SubmitButton = styled.button`
    width: 600px;
    height: 60px;
    color: #fff;
    background-color: ${secondaryColor};
    border-radius: 10px;
    margin-top: 50px;
`;
