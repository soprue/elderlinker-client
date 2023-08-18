import React from "react";
import styled from "styled-components";
import { media } from "../../styles/mixin";

function Gym() {
    return (
        <>
            <Intro>
                <Wrap>
                    <Title>
                        <br />
                        '국군도수체조'
                    </Title>
                    <Description>온몸을 풀어주는 맨손 체조</Description>
                </Wrap>
            </Intro>

            <Box>
                <Wrap>
                    <br />
                    <br />
                    <br />
                    <br />
                    <TitleTop />
                    <TitleBox>
                        <Titlesub>[국군도수체조영상]</Titlesub>
                    </TitleBox>
                    <Video>
                        <video width="1272" height="1019" controls="controls">
                            <source
                                src="https://kr.object.ncloudstorage.com/elderlinker/gym.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </Video>
                </Wrap>
            </Box>
        </>
    );
}
export default Gym;

const Wrap = styled.div``;

const Intro = styled.div`
    width: 100%;
    height: 950px;
    background-image: url("https://ifh.cc/g/45nZs9.jpg");
    background-size: cover;
    background-position: center center;

    ${media.tablet`
        height: 700px;
    `}

    ${media.mobile`
        height: 450px;
        margin-top: 50px;
    `}
`;

const Title = styled.h1`
    color: #385a64;
    font-weight: 500;
    font-size: 6rem;
    display: flex;
    justify-content: center;

    ${media.tablet`
        font-size: 5rem;
    `}

    ${media.mobile`
        font-size: 4rem;
    `}
`;

const Description = styled.p`
    color: #5d5d5d;
    font-size: 3rem;
    display: flex;
    justify-content: center;

    ${media.mobile`
      font-size: 2.5rem;
    `}
`;

const Box = styled.div`
    width: 100%;
    height: 1300px;
    background-color: #fbe4c4;

    ${media.tablet`
        padding: 0 30px 70px 30px;
        height: auto;
    `}

    ${media.mobile`
        padding: 0 20px 40px 20px;
    `}
`;

const Video = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 1272px;
    margin: 0 auto;

    & > video {
        width: 100%;
        height: auto;
    }

    ${media.tablet`
        width: 100%;
    `}
`;

const TitleBox = styled.div`
    width: 1272px;
    height: 92px;
    background-color: #1b2e35;
    display: flex;
    justify-content: center;
    margin: auto;

    ${media.tablet`
      width: 100%;
    `}

    ${media.mobile`
      height: 60px;
    `}
`;

const Titlesub = styled.div`
    font-size: 2rem;
    color: #ffffff;
    display: flex;
    justify-content: center;
    margin: auto;

    ${media.mobile`
      font-size: 1.6rem;
  `}
`;

const TitleTop = styled.div`
    width: 1272px;
    height: 10px;
    background-color: #ec7e85;
    display: flex;
    justify-content: center;
    margin: auto;

    ${media.tablet`
      width: 100%;
    `}
`;
