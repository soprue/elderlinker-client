import React from "react";
import styled from "styled-components";
import { useNavigation } from "../../hooks/navigation";

function Header() {
    const {
        goToHome,
        goToSignIn,
        goToSignUp,
        goToMypage,
        goToIntro,
        goToComputer,
        goToSmartphone,
        goToQuiz,
        goToGym,
    } = useNavigation();

    return (
        <HeaderWrap>
            <LogoWrap>
                <LogoImage
                    src="https://kr.object.ncloudstorage.com/elderlinker/logo-horizontal.png"
                    alt="logo"
                    onClick={goToHome}
                ></LogoImage>
            </LogoWrap>
            <NavWrap>
                <FirstUl>
                    <FirstLi onClick={goToIntro} isClickable={true}>
                        소개
                    </FirstLi>
                    <Divider />
                    <FirstLi isClickable={false}>
                        교육
                        <SecondUl>
                            <SecondLi onClick={goToComputer}>
                                컴퓨터 교육
                            </SecondLi>
                            <SecondLi onClick={goToSmartphone}>
                                스마트폰 교육
                            </SecondLi>
                            <SecondLi onClick={goToQuiz}>질병 퀴즈</SecondLi>
                        </SecondUl>
                    </FirstLi>
                    <Divider />
                    <FirstLi isClickable={true} onClick={goToGym}>
                        체조영상
                    </FirstLi>
                    <Divider />
                    <FirstLi isClickable={true} onClick={goToMypage}>
                        마이페이지
                    </FirstLi>
                </FirstUl>
            </NavWrap>
            <ButtonWrap>
                <SignButton onClick={goToSignIn}>로그인</SignButton>
                <SignButton onClick={goToSignUp}>회원가입</SignButton>
                {/* <SignButton>로그아웃</SignButton> */}
            </ButtonWrap>
        </HeaderWrap>
    );
}

export default Header;

const HeaderWrap = styled.header`
    display: flex;
    justify-content: space-between;
    height: 90px;
    padding: 0 40px;
`;

const LogoWrap = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

const LogoImage = styled.img`
    height: 40px;
    cursor: pointer;
`;

const NavWrap = styled.nav`
    & li {
        text-align: center;
    }
`;

const FirstUl = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
`;

const FirstLi = styled(({ isClickable, ...rest }) => <li {...rest} />)`
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    padding: 0 30px;
    cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};
`;

const Divider = styled.div`
    align-self: center;
    width: 2px;
    height: 2px;
    background-color: #000;
    border-radius: 50%;
    margin: 0 10px;
`;

const SecondUl = styled.ul`
    width: 150%;
    position: absolute;
    top: 100%;
    left: 50%;
    background: #fff;
    visibility: hidden;
    opacity: 0;
    transform: translate(-50%, -10px);
    transition: opacity 0.3s, transform 0.3s;

    ${FirstLi}:hover & {
        visibility: visible;
        opacity: 1;
        transform: translate(-50%, 0px);
    }
`;

const SecondLi = styled.li`
    padding: 15px 0;
    cursor: pointer;
`;

const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

const SignButton = styled.button`
    background-color: transparent;
    color: #d0516a;

    &:last-of-type {
        margin-left: 20px;
    }
`;
