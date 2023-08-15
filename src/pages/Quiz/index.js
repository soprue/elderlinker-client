import React from "react";
import styled from "styled-components";
import { media } from "../../styles/mixin";
import { useNavigation } from "../../hooks/navigation";

function Quiz() {
    const { goToQuizDetail } = useNavigation();

    return (
        <MainWrap>
            <Main>
                <Text>
                    노인 질환 퀴즈
                    <Description>
                        퀴즈를 통해 노인 질환에 대해 알아 볼 수 있습니다.
                    </Description>
                    <StartButton onClick={goToQuizDetail}>시작하기</StartButton>
                </Text>
            </Main>
        </MainWrap>
    );
}

export default Quiz;

const MainWrap = styled.div`
    width: 100%;
    height: calc(100vh - 90px - 130px);
    background-image: url("https://kr.object.ncloudstorage.com/elderlinker/main-quiz.png");
    background-size: cover;
    background-position: left center;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    width: 1280px;
    height: 100%;
    margin: 0 auto;
`;

const Text = styled.div`
    width: 50%;
    font-size: 5.4rem;
    font-weight: 600;
    color: #4c8aac;
`;

const Description = styled.p`
    font-size: 2rem;
    font-weight: 500;
    color: #40546d;
    margin: 10px 0 30px 0;
`;

const StartButton = styled.button`
    font-size: 2rem;
    font-weight: 500;
    color: #40546d;
    background-color: #fff;
    padding: 10px 30px;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
