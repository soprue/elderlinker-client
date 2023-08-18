import React from "react";
import styled from "styled-components";
import { media } from "../../styles/mixin";
import ComputerItme from "./computer-item.component";

function ComputerContent2() {
    return (
        <>
            <Intro>
                <Wrap>
                    <ContentTitle>
                        <ComputerItme title = "computer"/>
                    </ContentTitle>
                    <Bar></Bar>

                    <Title>2. 컴퓨터</Title>
                </Wrap>
            </Intro>
            <Content>
                <Wrap>
                    <Subcontent>
                        배경화면 바꾸기
                        <br />
                        <br />
                        1. 바탕화면 빈 공간에서 마우스 우측 클릭 → 개인 설정
                        클릭하세요.
                        <br />
                        (또는 키보드에서 Windows 로고 키 + i 키 를 누른 후
                        설정창 왼쪽 메뉴 중 개인 설정 클릭)
                        <br />
                        <br />
                        2. [배경]또는 [테마]를 선택하여 변경할 수 있습니다.
                        <br /> - [배경 개인 설정] 항목에서 원하는 배경 형식을
                        선택 합니다.
                        <br /> - 개인설정 메뉴에서 [테마] 선택하세요. 설정된
                        테마에 따라 바탕화면에 배경이 자동으로 변경 됩니다.
                    </Subcontent>
                </Wrap>
            </Content>
        </>
    );
}

export default ComputerContent2;

const Subcontent = styled.p`
    font-size: 1.8rem;
    font-weight: 300;
    margin: -120px 0 0 0;

    ${media.tablet`
        font-size: 1.6rem;
    `}

    ${media.mobile`
        font-size: 1.4rem;
    `}
`;

const Intro = styled.div`
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
    margin-top: 20px;

    ${media.mobile`
        margin-top: 70px;
    `}
`;

const Content = styled.div`
    width: 100%;
    height: 850px;

    ${media.tablet`
        height: 700px;
    `}

    ${media.mobile`
        height: 600px;
    `}
`;

const Wrap = styled.div`
    width: 1280px;
    height: 100%;
    margin: 0 auto;

    ${Intro} > & {
        display: flex;
        flex-direction: column;
    }

    ${Content} > & {
        align-items: center;
    }
    ${media.tablet`
        width: 100%;
        padding: 0 20px;
    `}
`;

const Title = styled.p`
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 400;
    padding-left: 20px;
    background-color: #c6ebff;
`;

const ContentTitle = styled.p`
    padding-left: 20px;
    margin-bottom: -20px;
    font-size: 2rem;
    font-weight: 500;
    cursor: default;
    float: left;
`;

const Bar = styled.div`
    margin-bottom: 30px;
    border-bottom: 3px solid black;
`;
