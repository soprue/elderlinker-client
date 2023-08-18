import React from "react";
import styled from "styled-components";
import { media } from "../../styles/mixin";
import ComputerItme from "./computer-item.component";

function ComputerContent3() {
    return (
        <>
            <Intro>
                <Wrap>
                    <ContentTitle>
                        <ComputerItme title = "computer"/>
                    </ContentTitle>
                    <Bar></Bar>

                    <Title>3. 메일</Title>
                </Wrap>
            </Intro>
            <Content>
                <Wrap>
                    <Subcontent>
                        <b>메일 보내기</b>
                        <br />
                        <br />
                        1. 컴퓨터에서 Gmail로 이동합니다.
                        <br />
                        <br />
                        2. 왼쪽 상단에서 편지쓰기를 클릭합니다.
                        <br />
                        <br />
                        3. '받는사람' 입력란에 수신자를 추가합니다. 다음과 같이
                        수신자를 추가할 수도 있습니다.
                        <br />
                        <br /> - '참조' 및 '숨은참조' 입력란에 추가합니다.
                        <br />
                        <br /> - 메일을 작성할 때 텍스트 입력란에 '+ 기호' 또는
                        '@멘션'과 연락처 이름을 입력합니다.
                        <br />
                        <br />
                        4. 제목을 추가합니다.
                        <br />
                        <br />
                        5. 메일을 작성합니다.
                        <br />
                        <br />
                        6. 페이지 하단에서 보내기를 클릭합니다.
                    </Subcontent>
                </Wrap>
            </Content>
        </>
    );
}

export default ComputerContent3;

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

