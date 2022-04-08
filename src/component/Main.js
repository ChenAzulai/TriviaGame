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
        <div className="main" style={{position: 'relative', margin: '25px'}}>
            <label style={{fontSize: '16px'}}> Enter Your name:</label>
            <input
                style={{border: '0px',
                    borderBottom: '1px solid #555',
                    padding: '5px',
                    fontSize: '16px'}}
                type="text"
                placeholder={currentName}
                onChange={(e) => setCurrentName(e.target.value)}
            />
            <br/>
            <button
                style={{position: 'relative',
                    padding: '10px',
                    margin: '5px',
                }}
                onClick={startQuiz}>Start Quiz
            </button>

        </div>
    )
};

export default Main;