import React, {useContext, useState} from "react";
import {QuizContext} from "../contexts/quizContext";
import {shuffleAns} from "../helpers/helper"


const Main = () => {
    const {quizState, setQuizState} = useContext(QuizContext);
    const {score, setScore} = useContext(QuizContext);
    const {questions} = useContext(QuizContext);
    const {answers, setAnswers} = useContext(QuizContext);
    const {currentQuestionIndex, setCurrentQuestionIndex} = useContext(QuizContext);
    const {currentName, setCurrentName} = useContext(QuizContext);


    const startQuiz = () => {
        setQuizState("quiz");
        setAnswers(shuffleAns(questions[currentQuestionIndex]));
        setScore(0);

    };


    return (
        <div className="main">
            <label> Enter Your name:</label>
            <input
                type="text"
                placeholder={currentName}
                onChange={(e) => setCurrentName(e.target.value)}
            />
            <button onClick={startQuiz}>Start Quiz</button>

        </div>
    )
};

export default Main;