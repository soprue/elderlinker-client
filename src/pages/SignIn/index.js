import React from "react";
import { useForm, Controller } from "react-hook-form";

import styled, { keyframes, css } from "styled-components";
import { textColor, secondaryColor, tertiaryColor } from "../../styles/colors";
import { media } from "../../styles/mixin";

import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";

function SignIn() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <SignWrap>
            <BackTop></BackTop>
            <BackBottom>
                <SignFormWrap onSubmit={handleSubmit(onSubmit)}>
                    <Title>로그인</Title>
                    <InputWrap>
                        <InputName>아이디</InputName>
                        <InputBox $hasError={errors.id}>
                            <MdEmail color="#555" size={20} />
                            <Controller
                                as={Input}
                                name="id"
                                control={control}
                                defaultValue=""
                                rules={{ required: "아이디는 필수입니다." }}
                                render={({ field }) => (
                                    <Input
                                        type="text"
                                        placeholder="EXAMPLE"
                                        {...field}
                                    />
                                )}
                            />
                        </InputBox>
                    </InputWrap>
                    <InputWrap>
                        <InputName>비밀번호</InputName>
                        <InputBox $hasError={errors.password}>
                            <FaKey color="#555" size={20} />
                            <Controller
                                as={Input}
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{ required: "비밀번호는 필수입니다." }}
                                render={({ field }) => (
                                    <Input
                                        type="password"
                                        placeholder="PASSWORD"
                                        {...field}
                                    />
                                )}
                            />
                        </InputBox>
                    </InputWrap>
                    <SubmitButton type="submit">로그인</SubmitButton>
                </SignFormWrap>
            </BackBottom>
        </SignWrap>
    );
}

export default SignIn;

const SignWrap = styled.div`
    width: 100%;

    ${media.tablet`
        min-height: calc(100vh - 80px - 80px);
    `}

    ${media.mobile`
        margin-top: 50px;
        min-height: calc(100vh - 50px - 50px);
    `}
`;

const BackTop = styled.div`
    width: 100%;
    height: 120px;
    background-color: #fff8ed;
    background-image: url("https://kr.object.ncloudstorage.com/elderlinker/bg-top.png");
    background-size: 100%;
    background-position: center top;
    background-repeat: no-repeat;

    ${media.mobile`
        height: 80px;
    `}
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
    padding-bottom: 120px;

    ${media.tablet`
        min-height: calc(100vh - 80px - 80px - 120px);
        padding: 0 30px 120px 30px;
    `}

    ${media.mobile`
        min-height: calc(100vh - 50px - 50px - 80px);
        padding: 0 20px 80px 20px;
    `}
`;

const SignFormWrap = styled.form`
    width: 1200px;
    text-align: center;
    padding: 60px 0;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 15px;

    ${media.tablet`
        width: calc(100% - 60px);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `}

    ${media.mobile`
        width: calc(100% - 40px);
        padding: 60px 20px;
        position: unset;
        transform: unset;
    `}
`;

const Title = styled.p`
    font-size: 3.6rem;
    font-weight: 500;
    color: ${textColor};
    margin-bottom: 20px;

    ${media.tablet`
        font-size: 3rem;
    `}

    ${media.mobile`
        font-size: 2.5rem;
    `}
`;

const InputWrap = styled.div`
    width: 600px;
    margin: 0 auto;
    text-align: left;

    & + & {
        margin-top: 20px;
    }

    ${media.mobile`
        width: 100%;
    `}
`;

const InputName = styled.p`
    color: ${textColor};
    font-weight: 500;
    margin-bottom: 5px;

    ${media.mobile`
        font-size: 1.4rem;
    `}
`;

const shake = keyframes`
    0% { transform: translateX(0); }
    10% { transform: translateX(-10px); }
    20% { transform: translateX(10px); }
    30% { transform: translateX(-10px); }
    40% { transform: translateX(10px); }
    50% { transform: translateX(0); }
    100% { transform: translateX(0); }
`;

const shakeAnimation = css`
    ${shake} 0.6s cubic-bezier(.36,.07,.19,.97) both
`;

const InputBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 20px 30px;
    border-radius: 10px;
    border: 1px solid #eee;
    border-color: ${(props) => (props.$hasError ? tertiaryColor : "#eee")};
    animation: ${(props) => (props.$hasError ? shakeAnimation : "none")};
    box-shadow: ${(props) =>
        props.$hasError ? "0 0 10px rgba(255, 115, 92, .2)" : "none"};

    ${media.mobile`
        height: 50px;
        padding: 0px 20px;
    `}
`;

const Input = styled.input`
    height: 100%;
    margin-left: 20px;
    color: ${textColor};
    font-size: 1.5rem;
    font-weight: 400;

    &::placeholder {
        color: #ccc;
    }

    ${media.mobile`
        font-size: 1.3rem;
    `}
`;

const SubmitButton = styled.button`
    width: 600px;
    height: 60px;
    color: #fff;
    background-color: ${secondaryColor};
    border-radius: 10px;
    margin-top: 50px;

    ${media.mobile`
        width: 100%;
        height: 50px;
        margin-top: 40px;
    `}
`;
