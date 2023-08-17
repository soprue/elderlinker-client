import React from "react";
import styled from "styled-components";
import { media } from "../../styles/mixin";
import content1 from './image/사진1.png';
import content2 from './image/사진2.png';
import content3 from './image/사진3.png';

function SmartContent3() {
    return (
        <>
            <Intro>
                <Wrap>
                    <ContentTitle>
                        강의
                    </ContentTitle>
                    <WrapSearch>
                        <Input></Input>
                        <Search>검색</Search>
                    </WrapSearch>
                    <Bar></Bar>

                    <Title>
                        3. 사진보내기
                    </Title>
                </Wrap>
            </Intro>
            <Content>
                <Wrap>
                    <Image>
                        <Img src={content1}></Img>
                        <Img src={content2}></Img>
                        <Img src={content3}></Img>
                    </Image>
                    <Subcontent>1. 대화방에 들어가 왼쪽 아래 ‘+’버튼을 눌러 다양한 기능 활용</Subcontent>
                    <Subcontent>2. 사진을 전송할 때는 ‘사진’ 버튼을, 동영상을 전송할 때는 ‘동영상’ 버튼을 눌러 사진이나 영상 전송</Subcontent>
                    <Subcontent>3. 곧바로 촬영해서 전송하고 싶을 때는 ‘카메라’를 누른다</Subcontent>
                </Wrap>
            </Content>
        </>
    );
}

export default SmartContent3;

const Image = styled.div`
    display: inline;
    weight : 300px;
    background-image : url('/message1.png');
    background-size : cover;
`;
const Img = styled.img`
    width: 200px;
    margin: 0 10px 30px 0;
`;


const Subcontent = styled.p`
    height: 50px;
    font-size: 2rem;
    font-weight: 300;
`;

const Intro = styled.div`
    width: 100%;
    height: 150px;
    background-size: cover;
    background-position: center center;
`;

const Content = styled.div`
    width: 100%;
    height: 660px;
    ${media.tablet`
        width: 100%;
        height: 1000px; 
    `}
    ${media.mobile`
        width: 100%;
        height: 1200px; 
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
    background-color: #C6EBFF;
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

const WrapSearch = styled.div`
    padding-bottom: 20px;
    text-align: right;
`;

const Input = styled.input`
    border: 1px solid black;
`;

const Search = styled.button`
    background-color: black;
    color: #fff;
    display: inline;
    border: 1px solid black;
    width:40px;
`;