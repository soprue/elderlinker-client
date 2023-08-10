import React from "react";
import styled from "styled-components";
import { primaryColor } from "../../styles/colors";
import { useNavigation } from "../../hooks/navigation";

import IntroImg from "../../assets/images/icons/icon-intro.png";
import SmartphoneImg from "../../assets/images/icons/icon-smartphone.png";
import ComputerImg from "../../assets/images/icons/icon-computer.png";
import QuizImg from "../../assets/images/icons/icon-quiz.png";
import GymImg from "../../assets/images/icons/icon-video.png";

function ShortcutItem({ title }) {
    const { goToIntro, goToComputer, goToSmartphone, goToQuiz, goToGym } =
        useNavigation();

    const getShortcutDetails = (title) => {
        const details = {
            intro: {
                src: IntroImg,
                displayTitle: "소개",
                target: goToIntro,
            },
            smartphone: {
                src: SmartphoneImg,
                displayTitle: "스마트폰 사용법",
                target: goToSmartphone,
            },
            computer: {
                src: ComputerImg,
                displayTitle: "컴퓨터 사용법",
                target: goToComputer,
            },
            quiz: {
                src: QuizImg,
                displayTitle: "노인 질환 퀴즈",
                target: goToQuiz,
            },
            gym: {
                src: GymImg,
                displayTitle: "체조 영상",
                target: goToGym,
            },
        };

        return (
            details[title] || {
                src: "",
                displayTitle: "",
                target: null,
            }
        );
    };

    const details = getShortcutDetails(title);

    return (
        <Box onClick={details.target}>
            <Image src={details.src} alt={details.displayTitle} />
            <Title>{details.displayTitle}</Title>
            <Bar></Bar>
        </Box>
    );
}

export default ShortcutItem;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 220px;
    color: ${primaryColor};
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;

    &:first-of-type {
        color: #fff;
        background-color: ${primaryColor};
    }
`;

const Image = styled.img``;

const Title = styled.p`
    margin: 20px 0;
`;

const Bar = styled.div`
    width: 60px;
    height: 5px;
    background-color: ${primaryColor};
    border-radius: 5px;

    ${Box}:first-of-type > & {
        background-color: #fff;
    }
`;
