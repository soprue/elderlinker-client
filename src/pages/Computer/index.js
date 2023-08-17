import React from "react";
import styled from "styled-components";
import { bannerTextColor, primaryColor } from "../../styles/colors";
import { media } from "../../styles/mixin";

import ComputerItem from "./computer-item.component";

function Computer() {
    return (
        <>
            <Intro>
                <Wrap>
                    <Title>
                        디지털 시대에 적응하기 위한
                        <br />
                        기본 지침, 컴퓨터 교육
                    </Title>
                    <Description>
                        에더링크의 교육을 통해서 컴퓨터의 기본 기능을 알아보아요
                    </Description>
                </Wrap>
            </Intro>
            <Content>
                <Wrap>
                    <ContentTitle>강의</ContentTitle>
                    <SearchBar>
                        <Input type="text" placeholder="검색" />
                        <SearchButton>검색</SearchButton>
                    </SearchBar>
                    <Separator />
                    <Courses>
                        <Checkbox type="checkbox" />
                        <ComputerItem title="computerContent1" />
                        <Checkbox type="checkbox" />
                        <ComputerItem title="computerContent2" />
                        <Checkbox type="checkbox" />
                        <ComputerItem title="computerContent3" />
                        <Checkbox type="checkbox" />
                        <ComputerItem title="computerContent4" />
                    </Courses>
                </Wrap>
            </Content>
        </>
    );
}

export default Computer;

const Intro = styled.div`
    width: 100%;
    height: 660px;
    background-image: url("https://kr.object.ncloudstorage.com/elderlinker/main-computer.png");
    background-size: cover;
    background-position: center center;
    ${media.tablet`
    height: 600px;
    background-image: url("https://kr.object.ncloudstorage.com/elderlinker/main-computer.png");
    `}

    ${media.mobile`
        height: 300px;
        margin-top: 50px;
    `}
`;

const Content = styled.div`
    width: 100%;
    min-height: 660px; /* Adjust this value as needed */
    background-color: #fff;
    padding-bottom: 50px; /* Adjust this value as needed */
`;

const Wrap = styled.div`
    width: 1280px;
    margin: 0 auto;

    ${Intro} > & {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;
    }

    ${Content} > & {
        padding-top: 150px;
        align-items: center;
    }

    ${media.tablet`
        width: 100%;
        padding: 0 20px;
        text-align: center;
    `}
`;

const Title = styled.p`
    font-size: 5.4rem;
    font-weight: 600;
    color: ${bannerTextColor};
    ${media.tablet`
        font-size: 5rem;
        margin-bottom: 10px
    `}

    ${media.mobile`
        font-size: 2.5rem;
        margin-bottom: 5px;
    `}
`;

const Description = styled.p`
    font-size: 2rem;
    font-weight: 500;
    color: #40546d;
    margin-bottom: 50px;
`;

const ContentTitle = styled.p`
    font-size: 2rem;
    font-weight: 500;
    cursor: default;
    float: left;
    margin-bottom: 10px;
`;

const SearchBar = styled.div`
    text-align: right;
    margin-bottom: 20px;
`;

const Input = styled.input`
    border: 1px solid black;
    padding: 5px;
    width: 200px;
`;

const SearchButton = styled.button`
    background-color: black;
    color: #fff;
    border: 1px solid black;
    padding: 5px 10px;
    cursor: pointer;

    ${media.tablet`
        margin-top: 10px;
    `}
`;

const Separator = styled.div`
    margin-bottom: 20px;
    border-bottom: 3px solid black;
`;

const Courses = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    
`;

const Checkbox = styled.input`
    appearance: none;
    margin-right: 10px;
    border: 1.5px solid gainsboro;
    border-radius: 1rem;
    width: 2rem;
    height: 2rem;

    &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: ${primaryColor};
    }

    ${media.tablet`
        margin-right: 5px;
    `}
`;
