import React from "react";
import styled from "styled-components";
import { useNavigation } from "../../hooks/navigation";
import { media } from "../../styles/mixin";

function ComputerphoneItem({ title }) {
    const {
        goToComputer,
        goToComputerContent1,
        goToComputerContent2,
        goToComputerContent3,
        goToComputerContent4,
    } = useNavigation();

    const getShortcutDetails = (title) => {
        const details = {
            computer: {
                displayTitle: "강의",
                target: goToComputer,
            },
            computerContent1: {
                displayTitle: "한글이용하기",
                target: goToComputerContent1,
            },
            computerContent2: {
                displayTitle: "컴퓨터",
                target: goToComputerContent2,
            },
            computerContent3: {
                displayTitle: "메일",
                target: goToComputerContent3,
            },
            computerContent4: {
                displayTitle: "키보드단축키",
                target: goToComputerContent4,
            },
        };

        return (
            details[title] || {
                displayTitle: "",
                target: null,
            }
        );
    };

    const details = getShortcutDetails(title);

    return (
        <Box onClick={details.target}>
            <Title>{details.displayTitle}</Title>
        </Box>
    );
}

export default ComputerphoneItem;

const Box = styled.div`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;

    ${media.tablet`
        padding: 0 20px;
    `}

    ${media.mobile`
        padding: 0 10px;
    `}
`;

const Title = styled.p`
    margin: 10px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    cursor: pointer;
    width: 100%;

    ${Box}:first-child > & {
        border-bottom: none;
    }
`;
