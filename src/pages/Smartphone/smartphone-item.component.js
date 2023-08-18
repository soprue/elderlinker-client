import React from "react";
import styled from "styled-components";
import { useNavigation } from "../../hooks/navigation";

function SmartphoneItem({ title }) {
    const { goToSmartContent1, goToSmartContent2, goToSmartContent3, goToSmartContent4 } =
        useNavigation();

    const getShortcutDetails = (title) => {
        const details = {
            smartContent1: {
                displayTitle: "문자보내기",
                target: goToSmartContent1,
            },
            smartContent2: {
                displayTitle: "카카오톡 프로필 편집",
                target: goToSmartContent2,
            },
            smartContent3: {
                displayTitle: "사진보내기",
                target: goToSmartContent3,
            },
            smartContent4: {
                displayTitle: "동영상찍기",
                target: goToSmartContent4,
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

export default SmartphoneItem;

const Box = styled.div`
    justify-content: center;
    align-items: center;
    width: 100%x;
    height: 50px;
`;


const Title = styled.p`
    margin: 10px 0;
    padding-left: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    cursor: pointer;
`;
