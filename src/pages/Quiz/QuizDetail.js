import React, { useState } from "react";
import styled from "styled-components";
import { media } from "../../styles/mixin";
import { primaryColor } from "../../styles/colors";
import { useNavigation } from "../../hooks/navigation";

import QuizData from "../../assets/data/quiz.json";

function QuizDetail() {
    const { goToQuiz } = useNavigation();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleCheckAnswer = () => {
        if (selectedOption === QuizData.quizzes[currentQuestionIndex].answer) {
            setIsCorrect(true);
            setCorrectAnswers((prev) => prev + 1);
        } else {
            setIsCorrect(false);
        }
        setShowModal(true);
    };

    const handleNextQuestion = () => {
        setSelectedOption(null);
        if (currentQuestionIndex < QuizData.quizzes.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        }
        setShowModal(false);
    };

    return (
        <QuizContainer>
            {QuizData.quizzes[currentQuestionIndex] ? (
                <>
                    <CurrentQuestionNumber>
                        {currentQuestionIndex + 1} / {QuizData.quizzes.length}
                    </CurrentQuestionNumber>
                    <Question>
                        문제 {currentQuestionIndex + 1}){" "}
                        {QuizData.quizzes[currentQuestionIndex].question}
                    </Question>
                    <Options>
                        {QuizData.quizzes[currentQuestionIndex].options.map(
                            (option, index) => (
                                <Option key={index}>
                                    <OptionInput
                                        type="radio"
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={handleOptionChange}
                                    />
                                    {option}
                                </Option>
                            )
                        )}
                    </Options>
                    <CheckAnswerButton
                        onClick={handleCheckAnswer}
                        disabled={selectedOption === null}
                    >
                        정답 확인하기
                    </CheckAnswerButton>

                    {showModal && (
                        <Modal>
                            <ModalContent>
                                <p>
                                    {isCorrect ? "맞혔습니다!" : "틀렸습니다!"}
                                </p>
                                {currentQuestionIndex <
                                QuizData.quizzes.length - 1 ? (
                                    <NextButton onClick={handleNextQuestion}>
                                        다음 문제로
                                    </NextButton>
                                ) : (
                                    <ResultText>
                                        총 {correctAnswers} 문제를 맞혔습니다!
                                        <NextButton onClick={goToQuiz}>
                                            처음으로
                                        </NextButton>
                                    </ResultText>
                                )}
                            </ModalContent>
                        </Modal>
                    )}
                </>
            ) : (
                <p>문제가 없습니다.</p>
            )}
        </QuizContainer>
    );
}

export default QuizDetail;

const QuizContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: calc(100vh - 90px - 130px);
    background-color: #f3fbff;
`;

const CurrentQuestionNumber = styled.p`
    font-size: 1.8rem;
    color: #fff;
    background-color: #9ecce6;
    border-radius: 20px;
    padding: 10px;
    margin-bottom: 20px;
`;

const Question = styled.h2`
    font-size: 2rem;
    color: #40546d;
    margin-bottom: 20px;
`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Option = styled.label`
    display: flex;
    align-items: center;
    gap: 15px;
    color: #40546d;
    background: #fff;
    width: 500px;
    padding: 15px 20px;
    border-radius: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 1px 10px;
`;

const OptionInput = styled.input`
    cursor: pointer;
`;

const CheckAnswerButton = styled.button`
    font-size: 1.4rem;
    color: #fff;
    background-color: ${(props) => (props.disabled ? "#aaa" : "#333")};
    padding: 15px 20px;
    border-radius: 20px;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    opacity: ${(props) => (props.disabled ? "0.6" : "1")};
`;

const Modal = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    font-size: 1.8rem;
    background-color: #fff;
    border-radius: 25px;
    padding: 30px 50px;
    text-align: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const NextButton = styled.button`
    display: block;
    font-size: 1.4rem;
    color: #fff;
    background-color: #333;
    border-radius: 20px;
    padding: 15px 20px;
    margin-top: 30px;
    cursor: pointer;
`;

const ResultText = styled.p`
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
`;
