import React, {useContext, useEffect, useState} from "react";
import {QuizContext} from "../contexts/quizContext";
import Answer from "./Answer";
import he from 'he'
import "../App.css"

const Question = ({
                      toggleTimer,
                      quizLength,
                  }) => {
    const {quizState, setQuizState} = useContext(QuizContext);
    const {currentQuestionIndex, setCurrentQuestionIndex} = useContext(QuizContext);
    const {currentAnswer, setCurrentAnswer} = useContext(QuizContext);
    const {questions} = useContext(QuizContext);
    const {answers, setAnswers} = useContext(QuizContext);

    const answerClicked = (answerText) => {
        setCurrentAnswer(answerText);
        toggleTimer();
    };

    return (
        <div>
            <div className="question">
                <div>{currentQuestionIndex + 1}/{quizLength}</div>
                <div>{he.decode(questions[currentQuestionIndex].question)}</div>

                <div className="answers">
                    {answers.map((answer, index) => (
                            <Answer
                                isEnable={currentAnswer}
                                index={index + 1}
                                answerSelected={(answerText) => answerClicked(answerText)}
                                text={he.decode(answer)}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    )
};

export default Question;