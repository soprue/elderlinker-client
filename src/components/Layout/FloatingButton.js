import React from "react";
import styled from "styled-components";

function FloatingButton() {
    return (
        <FloatingWrap>
            <FloatingImage
                src="https://kr.object.ncloudstorage.com/elderlinker/icons/icon-magnifier.png"
                alt="magnifier"
            />
            <p>돋보기</p>
        </FloatingWrap>
    );
}

export default FloatingButton;

const FloatingWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 130px;
    background-color: #ff735c;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    bottom: 100px;
    right: 40px;
    z-index: 1;
`;

const FloatingImage = styled.img`
    width: 50px;
    margin-bottom: 10px;
`;
