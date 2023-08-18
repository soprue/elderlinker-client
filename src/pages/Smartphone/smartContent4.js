import React from "react";
import styled from "styled-components";
import { media } from "../../styles/mixin";
import SmartphoneItme from "./smartphone-item.component";
import content1 from "./image/프로필1.jpg";
import content2 from "./image/프로필2.jpg";
import content3 from "./image/프로필3.jpg";
import content4 from "./image/프로필4.jpg";
import content5 from "./image/프로필5.jpg";

function SmartContent4() {
    return (
        <>
            <Intro>
                <Wrap>
                    <ContentTitle>
                        <SmartphoneItme title = "smartphone"/>
                    </ContentTitle>
                    <Bar></Bar>

                    <Title>4. 카카오톡 프로필 편집</Title>
                </Wrap>
            </Intro>
            <Content>
                <Wrap>
                    <Image>
                        <ImgStart>
                            <Img src={content1}></Img>
                            <Img src={content2}></Img>
                            <Img src={content3}></Img>
                        </ImgStart>
                        <ImgEnd>
                            <Img src={content4}></Img>
                            <Img src={content5}></Img>
                        </ImgEnd>
                    </Image>
                    <Subcontent>
                        1. 프로필로 설정되어 있는 이미지를 클릭해 줍니다.
                    </Subcontent>
                    <Subcontent>2. 프로필 편집을 클릭해 줍니다.</Subcontent>
                    <Subcontent>3. 카메라 마크를 클릭해 줍니다.</Subcontent>
                    <Subcontent>
                        4. 앨범(갤러리)에서 사진 / 동영상 선택을 클릭해 줍니다.
                    </Subcontent>
                    <Subcontent>
                        5. 원하는 사진을 선택해 주시면 프로필로 자동 변경됩니다.
                    </Subcontent>

                    <Public>
                        [출처] 카카오톡 프로필 변경하는 방법(초간단)|작성자
                        마니아
                    </Public>
                </Wrap>
            </Content>
        </>
    );
}

export default SmartContent4;

const Public = styled.div`
    color: grey;
`;

const Image = styled.div`
    weight: 300px;
    background-image: url("/message1.png");
    background-size: cover;
`;

const Img = styled.img`
    width: 400px;
    margin: 0 10px 0px 0;
`;

const ImgEnd = styled.div`
    margin: 0px 0px 20px 0;
`;

const ImgStart = styled.div`
    margin: 0 0px 0px 0;
`;

const Subcontent = styled.p`
    height: 50px;
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
    height: 150px;
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

