import React from "react";
import styled from "styled-components";
//import {bannerTextColor, primaryColor} from "../../styles/colors";
import content1 from './image/메시지1.png';
import content2 from './image/메시지2.png';
import content3 from './image/메시지3.png';
import content4 from './image/메시지4.png';


function SmartContent1() {
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
                        1. 카카오톡보내기 
                    </Title>
                </Wrap>
            </Intro>
            <Content>
                <Wrap>
                    <Image>
                        <Img src={content1}></Img>
                        <Img src={content2}></Img>
                        <Img src={content3}></Img>
                        <Img src={content4}></Img>
                    </Image>
                    <Subcontent>1. 휴대폰 메인화면에서 카카오톡 아이콘 선택</Subcontent>
                    <Subcontent>2. 사람 그림 선택 후 메세지 보낼 친구 선택</Subcontent>
                    <Subcontent>3. 선택한 대상 1대 1채팅 선택</Subcontent>
                    <Subcontent>4. 메시지 보낼 친구 이름 확인</Subcontent>
                </Wrap>
            </Content>
        </>
    );
}

export default SmartContent1;

const Image = styled.div`
    display: inline;
    weight : 300px;
    background-image : url('/message1.png');
    background-size : cover;
`;
const Img = styled.img`
    width: 200px;
    margin: -100px 10px 30px 0;
`;


const Subcontent = styled.p`
    height: 50px;
    font-size: 2rem;
    font-weight: 300;
`;

const Intro = styled.div`
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center center;
`;

const Content = styled.div`
    width: 100%;
    height: 660px;
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