import React from "react";
import styled from "styled-components";
import { media } from "../../styles/mixin";

function Intro() {
    return (
        <IntroWrap>
            <img src="https://kr.object.ncloudstorage.com/elderlinker/intro-main.png"></img>
            <Service>
                <ServiceBox>
                    <ServiceImage src="https://kr.object.ncloudstorage.com/elderlinker/intro-smartphone.png"></ServiceImage>
                    <ServiceText>
                        <ServiceName>01. 스마트폰 교육</ServiceName>
                        <ServiceDesc>
                            자주 헷갈리는 스마트폰 사용법을 학습 가능
                        </ServiceDesc>
                    </ServiceText>
                </ServiceBox>
                <ServiceBox>
                    <ServiceText $pos="left">
                        <ServiceName>02. 컴퓨터 교육</ServiceName>
                        <ServiceDesc>
                            컴퓨터에 대한 기본적인 사용법을 학습 가능
                        </ServiceDesc>
                    </ServiceText>
                    <ServiceImage src="https://kr.object.ncloudstorage.com/elderlinker/intro-computer.png"></ServiceImage>
                </ServiceBox>
                <ServiceBox>
                    <ServiceImage src="https://kr.object.ncloudstorage.com/elderlinker/intro-quiz.png"></ServiceImage>
                    <ServiceText>
                        <ServiceName>03. 노인 질환 퀴즈</ServiceName>
                        <ServiceDesc>
                            노인성 질환(당뇨, 고혈압 등) 퀴즈 풀이를 통한
                            <br />
                            인지 서비스 제공
                        </ServiceDesc>
                    </ServiceText>
                </ServiceBox>
                <ServiceBox>
                    <ServiceText $pos="left">
                        <ServiceName>04. 체조 영상</ServiceName>
                        <ServiceDesc>국국도수체조 따라 하기</ServiceDesc>
                    </ServiceText>
                    <ServiceImage src="https://kr.object.ncloudstorage.com/elderlinker/intro-gym.png"></ServiceImage>
                </ServiceBox>
            </Service>
            <DotWrap>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
            </DotWrap>
            <BadgeWrap>
                <BadgeTitle>마이 뱃지</BadgeTitle>
                <BadgeDesc>
                    위 과제들을 수행하면 마이 페이지에서 마이 뱃지를 얻으실 수
                    있습니다.
                </BadgeDesc>
                <BadgeImage src="https://kr.object.ncloudstorage.com/elderlinker/intro-badge.png"></BadgeImage>
            </BadgeWrap>
        </IntroWrap>
    );
}

export default Intro;

const IntroWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 1140px;
    margin: 0 auto;

    ${media.tablet`
        width: 100%;
    `}
`;

const Service = styled.div``;

const ServiceBox = styled.div`
    display: flex;
`;

const ServiceImage = styled.img`
    width: 50%;
`;

const ServiceText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: 0 80px;

    ${media.tablet`
        padding: 0 50px;
    `}

    ${media.mobile`
        padding: 0 20px;
    `}

    ${(props) => props.$pos && `align-items: end; text-align: right;`}
`;

const ServiceName = styled.p`
    font-size: 2.4rem;
    font-weight: 600;
    color: #222;
    margin-bottom: 30px;

    ${media.tablet`
        font-size: 2.2rem;
        margin-bottom: 20px;
    `}

    ${media.mobile`
        font-size: 1.6rem;
        margin-bottom: 10px;
    `}
`;

const ServiceDesc = styled.p`
    font-size: 1.8rem;
    font-weight: 500;
    color: #222;

    ${media.tablet`
        font-size: 1.6rem;
    `}

    ${media.mobile`
        font-size: 1.2rem;
    `}
`;

const DotWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    margin: 80px 0;

    ${media.tablet`
        margin: 60px 0;
    `}

    ${media.mobile`
        margin: 35px 0;
        gap: 15px;
    `}
`;

const Dot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #c9c9c9;

    ${media.mobile`
        width: 8px;
        height: 8px;
    `}
`;

const BadgeWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const BadgeTitle = styled.span`
    color: #fff;
    font-size: 2.6rem;
    font-weight: 500;
    background-color: #e396a5;
    padding: 10px 40px;
    border-radius: 30px;

    ${media.tablet`
        font-size: 2.2rem;
    `}

    ${media.mobile`
        font-size: 1.6rem;
        padding: 8px 30px;
    `}
`;

const BadgeDesc = styled.p`
    font-size: 1.8rem;
    font-weight: 500;
    color: #222;
    margin: 40px 0 80px 0;

    ${media.tablet`
        font-size: 1.6rem;
        margin: 30px 0 60px 0;
    `}

    ${media.mobile`
        text-align: center;
        font-size: 1.3rem;
        padding: 0 20px;
        margin: 20px 0 40px 0;
    `}
`;

const BadgeImage = styled.img`
    width: 100%;
    margin-bottom: 150px;

    ${media.tablet`
        margin-bottom: 100px;
    `}

    ${media.mobile`
        margin-bottom: 50px;
    `}
`;

