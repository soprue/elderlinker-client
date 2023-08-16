import React from "react";
import styled from "styled-components";

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
            <video width='1272' height='1019' controls="controls">
                <source src="https://kr.object.ncloudstorage.com/elderlinker/gym.mp4" type="video/mp4"/>
            </video>
          </Video>

        </Wrap>
      </Box>
    </>
  );
}
export default Gym;

const Box = styled.div`
  width: 100%;
  height: 1300px;
  background-color: #fbe4c4;
`;


const Video = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const TitleBox = styled.div`
  width: 1272px;
  height: 92px;
  background-color: #1b2e35;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const Titlesub = styled.div`
  font-size: 20pt;
  color: #ffffff;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const TitleTop = styled.div`
  width: 1272px;
  height: 10px;
  background-color: #ec7e85;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const Wrap = styled.div``;

const Intro = styled.div`
  width: 100%;
  height: 950px;
  background-image: url("https://ifh.cc/g/45nZs9.jpg");
  background-size: cover;
  background-position: center center;
`;

const Title = styled.h1`
  color: #385a64;
  font-weight: 500;
  font-size: 60pt;
  display: flex;
  justify-content: center;
`;

const Description = styled.p`
  color: #5d5d5d;
  font-size: 30pt;
  display: flex;
  justify-content: center;
`;
