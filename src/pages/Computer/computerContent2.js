import React from "react";
import styled from "styled-components";
import { media } from "../../styles/mixin";


function ComputerContent2() {
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
                        2. 컴퓨터 
                    </Title>
                </Wrap>
            </Intro>
            <Content>
                <Wrap>
                    <Subcontent>배경화면 바꾸기</Subcontent>
                    <Subcontent>1. 바탕화면 빈 공간에서 마우스 우측 클릭 → 개인 설정 클릭하세요. (또는 키보드에서 Windows 로고 키 + i 키 를 누른 후 설정창 왼쪽 메뉴 중 개인 설정 클릭)</Subcontent>
                    <Subcontent>2. [배경]또는 [테마]를 선택하여 변경할 수 있습니다.</Subcontent>
                    <Subcontent> - [배경 개인 설정] 항목에서 원하는 배경 형식을 선택 합니다.</Subcontent>
                    <Subcontent> - 개인설정 메뉴에서 [테마] 선택하세요. 설정된 테마에 따라 바탕화면에 배경이 자동으로 변경 됩니다.</Subcontent>
                    
                </Wrap>
            </Content>
        </>
    );
}

export default ComputerContent2;



const Subcontent = styled.p`
    height: 50px;
    font-size: 2rem;
    font-weight: 300;
    ${media.mobile`
        font-size: 1.6rem;
    `}
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