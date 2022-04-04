import React, {useContext, useEffect, useState} from "react";
import {QuizContext} from "../contexts/quizContext";
import data from "../DB";
import Question from "./Question";
import {shuffleAns} from "../helpers/helper"
import Answer from "./Answer";


const Quiz = () => {
    const {quizState, setQuizState} = useContext(QuizContext);
    const {currentQuestionIndex, setCurrentQuestionIndex} = useContext(QuizContext);
    const {currentAnswer, setCurrentAnswer} = useContext(QuizContext);
    const {score, setScore} = useContext(QuizContext);
    const {questions} = useContext(QuizContext);
    const {answers, setAnswers} = useContext(QuizContext);

    let questionSize = data.length;//TODO: question length


    const [counter, setCounter] = useState(30);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isActive && counter > 0) {
            interval = setInterval(() => {
                setCounter(counter => counter - 1);
            }, 1000);
        } else if (!isActive) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [counter]);

    const toggle = () => {
        setIsActive(!isActive);
    };

    const finishQuiz = () => {
        setScore(score + clacScore(counter, questions[currentQuestionIndex].difficulty));        //TODO: add dcalculate score
        setCurrentQuestionIndex(0);
        setQuizState("score");
        setCurrentAnswer("");
    };

    const mainMenu = () => {
        //TODO: init params
        setScore(0);
        setQuizState("main");
    };

    const clacScore = (time, difficulty) => {
        const diff = difficulty === "hard" ? 1.2 :
            difficulty === "medium" ? 1 : 0.8;
        return diff + time;
    };

    const nextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer("");
        setAnswers(shuffleAns(questions[currentQuestionIndex + 1]));
        setScore(score + clacScore(counter, questions[currentQuestionIndex].difficulty));        //TODO: add dcalculate score
        setCounter(30);
        toggle();
    };

    return (
        <div className="quiz">
            {quizState === "score" && (
                <div className="score-screen" style={{width: 'fit-content', display: 'inline-block'}}>
                    <div>
                        result: {score}
                    </div>
                    <div onClick={mainMenu} style={{cursor: 'pointer', background: 'grey'}}>
                        Main Menu
                    </div>
                </div>
            )}
            {quizState === "quiz" && (
                <div className="quiz-screen">
                    <div>Countdown: {counter}</div>

                    <Question
                        toggleTimer={() => toggle()}

                    />
                    {currentAnswer && (
                        <>
                            {currentQuestionIndex === questionSize - 1 && (
                                <button onClick={finishQuiz}>
                                    Finish Quiz
                                </button>
                            )}
                            {currentQuestionIndex !== questionSize - 1 && (
                                <button onClick={nextQuestion}>
                                    Next Question
                                </button>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    )
};

export default Quiz;