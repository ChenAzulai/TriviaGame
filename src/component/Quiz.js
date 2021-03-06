import React, {useContext, useEffect, useState} from "react";
import {QuizContext} from "../contexts/quizContext";
import Question from "./Question";
import {shuffleAns} from "../helpers/helper"


const Quiz = () => {
    const {quizState, setQuizState} = useContext(QuizContext);
    const {currentQuestionIndex, setCurrentQuestionIndex} = useContext(QuizContext);
    const {currentAnswer, setCurrentAnswer} = useContext(QuizContext);
    const {score, setScore} = useContext(QuizContext);
    const {questions, setQuestions} = useContext(QuizContext);
    const {answers, setAnswers} = useContext(QuizContext);
    const {currentName} = useContext(QuizContext);

    const quizLength = 5;  //questions.length; really?! is so long
    const timeOut = "timeOut";

    const [counter, setCounter] = useState(30);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isActive && counter > 0) {
            interval = setInterval(() => {
                setCounter(counter => counter - 1);
            }, 1000);
        } else if (counter === 0) {
            setCurrentAnswer(timeOut);
            clearInterval(interval);
        } else if (!isActive) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [counter]);

    const toggle = () => {
        setIsActive(!isActive);
    };

    const shuffleArray = (array) => {
        let arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    const finishQuiz = () => {
        if (currentAnswer !== timeOut) setScore(clacScore(counter, questions[currentQuestionIndex]));
        setCurrentQuestionIndex(0);
        setQuizState("score");
        setCurrentAnswer("");
        setQuestions(shuffleArray(questions));
    };

    const setStorage = (score, currentName) => {
        const name = currentName === "" ? "None" : currentName;
        const newRecord = [score, name];
        const resultsItem = localStorage.getItem('resultsTable');
        let resultArr = [];
        if (resultsItem) {
            resultArr = JSON.parse(resultsItem);
            resultArr.push(newRecord);
            if (resultArr.length > 10) resultArr.shift();
        } else {
            resultArr.push(newRecord);
            console.log('No record found')
        }
        localStorage.setItem('resultsTable', JSON.stringify(resultArr));
        console.log('LocalStorage updated');

    };

    const mainMenu = () => {
        setScore(0);
        setQuizState("main");
        setStorage(score, currentName);
    };

    const clacScore = (time, question) => {
        const difficulty = question.difficulty;
        const ratio = difficulty === "hard" ? 1.2 :
            difficulty === "medium" ? 1 : 0.8;
        const ans = question.correct_answer === currentAnswer;
        if (!ans) return score;
        return Math.round(score + (ratio * time));
    };

    const nextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer("");
        setAnswers(shuffleAns(questions[currentQuestionIndex + 1]));
        if (currentAnswer !== timeOut) setScore(clacScore(counter, questions[currentQuestionIndex]));
        setCounter(30);
        toggle();
    };

    return (
        <div className="quiz">
            {quizState === "score" && (
                <div className="score-screen" style={{width: 'fit-content', display: 'inline-block'}}>
                    <div>
                        {currentName} you have got : {score} points!
                    </div>
                    <button onClick={mainMenu} style={{}}>
                        Main Menu
                    </button>
                </div>
            )}
            {quizState === "quiz" && (
                <div className="quiz-screen">
                    <div>Countdown: {counter}</div>

                    <Question
                        toggleTimer={() => toggle()}
                        quizLength={quizLength}
                    />
                    {currentAnswer && (
                        <>
                            {currentQuestionIndex === quizLength - 1 && (
                                <button onClick={finishQuiz}>
                                    Finish Quiz
                                </button>
                            )}
                            {currentQuestionIndex !== quizLength - 1 && (
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