import React, { useState } from "react";
import { useNavigation } from "../../hooks/navigation";
import styled from "styled-components";
import { primaryColor } from "../../styles/colors";
import { media } from "../../styles/mixin";

import { FiMenu } from "react-icons/fi";
import { BiEdit, BiHelpCircle, BiUserCircle } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlinePlayCircle } from "react-icons/ai";

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

    const [currentPage, setCurrentPage] = useState(null);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const handleNavigation = (navigationFunction, pageName) => {
        navigationFunction();
        setIsHamburgerOpen(false);
        setCurrentPage(pageName);
    };

    return (
        <HeaderWrap>
            <LogoWrap>
                <LogoImage
                    src="https://kr.object.ncloudstorage.com/elderlinker/logo-horizontal.png"
                    alt="logo"
                    onClick={() => handleNavigation(goToHome, "home")}
                ></LogoImage>
            </LogoWrap>
            <NavWrap>
                <FirstUl>
                    <FirstLi
                        onClick={() => handleNavigation(goToIntro, "intro")}
                        isClickable={true}
                        isActive={currentPage === "intro"}
                    >
                        소개
                    </FirstLi>
                    <Divider />
                    <FirstLi
                        isClickable={false}
                        isActive={currentPage === "edu"}
                    >
                        교육
                        <SecondUl>
                            <SecondLi
                                onClick={() =>
                                    handleNavigation(goToComputer, "edu")
                                }
                            >
                                컴퓨터 교육
                            </SecondLi>
                            <SecondLi
                                onClick={() =>
                                    handleNavigation(goToSmartphone, "edu")
                                }
                            >
                                스마트폰 교육
                            </SecondLi>
                            <SecondLi
                                onClick={() =>
                                    handleNavigation(goToQuiz, "edu")
                                }
                            >
                                질병 퀴즈
                            </SecondLi>
                        </SecondUl>
                    </FirstLi>
                    <Divider />
                    <FirstLi
                        isClickable={true}
                        onClick={() => handleNavigation(goToGym, "gym")}
                        isActive={currentPage === "gym"}
                    >
                        체조 영상
                    </FirstLi>
                    <Divider />
                    <FirstLi
                        isClickable={true}
                        onClick={() => handleNavigation(goToMypage, "mypage")}
                        isActive={currentPage === "mypage"}
                    >
                        마이페이지
                    </FirstLi>
                </FirstUl>
            </NavWrap>
            <ButtonWrap>
                <SignButton
                    onClick={() => handleNavigation(goToSignIn, "signin")}
                >
                    로그인
                </SignButton>
                <SignButton
                    onClick={() => handleNavigation(goToSignUp, "signup")}
                >
                    회원가입
                </SignButton>
                {/* <SignButton>로그아웃</SignButton> */}
            </ButtonWrap>

            {isHamburgerOpen && (
                <HamburgerMenu $isOpen={isHamburgerOpen}>
                    <HamburgerNavWrap>
                        <HamburgerNavUl>
                            <HamburgerNavLi
                                onClick={() => handleNavigation(goToIntro)}
                            >
                                <BiEdit />
                                소개
                            </HamburgerNavLi>
                            <HamburgerNavLi
                                onClick={() => handleNavigation(goToComputer)}
                            >
                                <RiComputerLine />
                                컴퓨터 교육
                            </HamburgerNavLi>
                            <HamburgerNavLi
                                onClick={() => handleNavigation(goToSmartphone)}
                            >
                                <BsPhone />
                                스마트폰 교육
                            </HamburgerNavLi>
                            <HamburgerNavLi
                                onClick={() => handleNavigation(goToQuiz)}
                            >
                                <BiHelpCircle />
                                질병 퀴즈
                            </HamburgerNavLi>
                            <HamburgerNavLi
                                onClick={() => handleNavigation(goToGym)}
                            >
                                <AiOutlinePlayCircle />
                                체조 영상
                            </HamburgerNavLi>
                            <HamburgerNavLi
                                onClick={() => handleNavigation(goToMypage)}
                            >
                                <BiUserCircle />
                                마이페이지
                            </HamburgerNavLi>
                        </HamburgerNavUl>
                    </HamburgerNavWrap>
                    <HamburgerButtonWrap>
                        <HamburgerButton
                            onClick={() => handleNavigation(goToSignIn)}
                        >
                            로그인
                        </HamburgerButton>
                        <HamburgerButton
                            onClick={() => handleNavigation(goToSignUp)}
                        >
                            회원가입
                        </HamburgerButton>
                    </HamburgerButtonWrap>
                </HamburgerMenu>
            )}
            <HamburgerIcon onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
                <FiMenu />
            </HamburgerIcon>
        </HeaderWrap>
    );
}

export default Header;

const HeaderWrap = styled.header`
    display: flex;
    justify-content: space-between;
    height: 90px;
    padding: 0 40px;

    ${media.tablet`
        height: 80px;
        padding: 0 30px;
    `}

    ${media.mobile`
        width: 100%;
        background: #fff;
        height: 50px;
        padding: 0 20px;
        position: fixed;
        top: 0;
        left: 0;
    `}
`;

const LogoWrap = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

const LogoImage = styled.img`
    height: 40px;
    cursor: pointer;

    ${media.tablet`
        height: 30px;
    `}

    ${media.mobile`
        height: 23px;
    `}
`;

const NavWrap = styled.nav`
    & li {
        text-align: center;
    }

    ${media.mobile`
        display: none;
    `}
`;

const FirstUl = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
`;

const FirstLi = styled(({ isClickable, isActive, ...rest }) => (
    <li {...rest} />
))`
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    padding: 0 30px;
    cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};

    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: ${primaryColor};
        transform: scaleX(0);
        transform-origin: bottom right;
        ${({ isActive }) =>
            isActive &&
            `
            transform: scaleX(1);
            transform-origin: bottom left;
        `}
    }

    ${media.tablet`
        padding: 0 15px;
    `}
`;

const Divider = styled.div`
    align-self: center;
    width: 2px;
    height: 2px;
    background-color: #000;
    border-radius: 50%;
    margin: 0 10px;

    ${media.tablet`
        margin: 0 5px;
    `}
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

    ${media.tablet`
        width: 200%;
    `}
`;

const SecondLi = styled.li`
    padding: 15px 0;
    cursor: pointer;

    ${media.tablet`
        padding: 10px 0;
    `}
`;

const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    height: 100%;

    ${media.mobile`
        display: none;
    `}
`;

const SignButton = styled.button`
    background-color: transparent;
    color: #d0516a;

    &:last-of-type {
        margin-left: 20px;
    }

    ${media.tablet`
        &:last-of-type {
            margin-left: 10px;
        }
    `}
`;

/* 햄버거 메뉴 스타일 시작 */
const HamburgerIcon = styled.div`
    display: none;
    font-size: 2rem;
    color: ${primaryColor};
    cursor: pointer;

    ${media.mobile`
        display: flex;
        align-items: center;
    `}
`;

const HamburgerMenu = styled.div`
    position: fixed;
    top: 50px;
    right: -100%;
    width: 100%;
    height: calc(100% - 50px);
    background: #fff;
    overflow-y: hidden;
    transition: right 0.5s;
    padding: 20px;
    z-index: 9999;

    ${(props) => props.$isOpen && `right: 0;`}
`;

const HamburgerNavWrap = styled.nav``;

const HamburgerNavUl = styled.ul``;

const HamburgerNavLi = styled.li`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
    transition: all 0.3s;
    font-size: 1.5rem;

    & > svg {
        margin-right: 8px;
    }

    & + & {
        margin-top: 20px;
    }

    &:hover {
        color: ${primaryColor};
    }
`;

const HamburgerButtonWrap = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const HamburgerButton = styled.button`
    background-color: ${primaryColor};
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 1.4rem;

    & + & {
        margin-left: 5px;
    }
`;
/* 햄버거 메뉴 스타일 끝 */
