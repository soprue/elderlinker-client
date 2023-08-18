import React from "react";
import styled from "styled-components";
import { media } from "../../styles/mixin";
import SmartphoneItme from "./smartphone-item.component";

import content1 from "./image/동영상1.png";
import content2 from "./image/동영상2.png";
import content3 from "./image/동영상3.png";

function SmartContent2() {
    return (
        <>
            <Intro>
                <Wrap>
                    <ContentTitle>
                        <SmartphoneItme title = "smartphone"/>
                    </ContentTitle>
                    <Bar></Bar>

                    <Title>2. 동영상 촬영</Title>
                </Wrap>
            </Intro>
            <Content>
                <Wrap>
                    <Image>
                        <Img src={content1}></Img>
                        <Img src={content2}></Img>
                        <Img src={content3}></Img>
                    </Image>
                    <Subcontent>
                        1. 카메라에 들어가서 동영상 글씨 클릭
                    </Subcontent>
                    <Subcontent>2. 빨간 버튼 클릭</Subcontent>
                    <Subcontent>3. 네모 버튼을 클릭하면 저장</Subcontent>
                </Wrap>
            </Content>
        </>
    );
}

export default SmartContent2;

const Image = styled.div`
    display: inline;
    weight: 300px;
    background-image: url("/message1.png");
    background-size: cover;
`;

const Img = styled.img`
    width: 400px;
    margin: 0 10px 30px 0;
`;

const Subcontent = styled.p`
    height: auto;
    font-size: 1.8rem;
    font-weight: 300;

    ${media.tablet`
        font-size: 1.6rem;
    `}

    ${media.mobile`
        font-size: 1.4rem;
    `}
`;

const Intro = styled.div`
    width: 100%;
    height: auto;
    background-size: cover;
    background-position: center center;

    ${media.mobile`
        margin-top: 70px;
    `}
`;

const Content = styled.div`
    width: 100%;
    height: auto;

    ${media.tablet`
        width: 100%;
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

        ${Content} > & {
            padding: 0 30px;
            height: auto;
        }
    `}

    ${media.mobile`
        ${Content} > & {
            padding: 0 20px;
            height: auto;
        }
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


