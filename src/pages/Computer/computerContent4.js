import React from "react";
import styled from "styled-components";
import { media } from "../../styles/mixin";
import ComputerItme from "./computer-item.component";

function ComputerContent4() {
    return (
        <>
            <Intro>
                <Wrap>
                    <ContentTitle>
                        <ComputerItme title = "computer"/>
                    </ContentTitle>
                    
                    <Bar></Bar>

                    <Title>4. 키보드 단축키</Title>
                </Wrap>
            </Intro>
            <Content>
                <Wrap>
                    <Subcontent>
                        Ctrl+C(복사)
                        <br />
                        <br />
                        Ctrl+X(잘라내기)
                        <br />
                        <br />
                        Ctrl+V(붙여넣기)
                        <br />
                        <br />
                        Ctrl+Z(실행 취소)
                        <br />
                        <br />
                        Delete(삭제)
                        <br />
                        <br />
                        Ctrl + 휠마우스 위로, 또는 아래로 (위로 : 텍스트 글꼴
                        확대, 아래로:글꼴 작게)
                        <br />
                        <br />
                        Shift + 휠마우스 위로, 또는 아래로... (위로 : 웹페이지
                        앞으로, 아래로:웹페이지 뒤로)
                        <br />
                        <br />
                        Alt + 왼쪽화살표 (웹사이트 이전페이지)
                        <br />
                        <br />
                        Alt + 오른쪽화살표 (사이트 앞으로가기)
                        <br />
                        <br />
                        Shift+Delete(선택한 항목을 휴지통에 넣지 않고 영구적으로
                        삭제)
                    </Subcontent>
                </Wrap>
            </Content>
        </>
    );
}

export default ComputerContent4;

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


