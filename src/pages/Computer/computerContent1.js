import React from "react";
import styled from "styled-components";
import { media } from "../../styles/mixin";
import ComputerItme from "./computer-item.component";

function ComputerContent1() {
    return (
        <>
            <Intro>
                <Wrap>
                    <ContentTitle>
                        <ComputerItme title = "computer"/>
                    </ContentTitle>

                    <Bar></Bar>

                    <Title>1. 한글 이용하기</Title>
                </Wrap>
            </Intro>
            <Content>
                <Wrap>
                    <Subcontent>
                        * 앞줄 맞추기
                        <br />
                        shift + tab
                        <br />
                        <br />
                        * 스타일 새 번호 시작
                        <br />
                        alt+shift+insert
                        <br />
                        <br />
                        * 블록 지정
                        <br />
                        F3 누르고 방향키
                        <br />
                        F4 누르고 방향키 : 세로방향에 대한 블록 지정
                        <br />
                        <br />
                        * 모두 선택
                        <br />
                        ctrl + A<br />
                        <br />
                        * 모양 복사 : 문단 모양, 글자 모양을 복사하는 기능
                        <br />
                        커서만 위치 시키고 alt + C → 복사한 것 적용하려면 블록
                        설정한 후 Alt + C
                        <br />
                        [편집] [모양 복사] <br />
                        <br />
                        * 문자표 보기
                        <br />
                        ctrl+F10
                        <br />
                        <br />
                        * 강제 쪽 나누기
                        <br />
                        ctrl+J 또는 ctrl+enter
                        <br />
                        <br />
                        * F7 : 편집용지 대화상자
                        <br />
                        [제본기능] 한쪽 or 맞쪽
                        <br />
                        <br />
                        * 자동저장기능 : [도구] [설정] [환경설정] [편집]
                        <br />
                        .ASV로 윈도의 임시폴더에 저당됨.
                    </Subcontent>
                </Wrap>
            </Content>
        </>
    );
}

export default ComputerContent1;

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

    ${media.tablet`
        font-size: 2.2rem;
    `}

    ${media.mobile`
        font-size: 1.8rem;
    `}
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

