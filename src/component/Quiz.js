import React, {useContext} from "react";
import {QuizContext} from "../contexts/quizContext";
import data from "../DB";
import Question from "./Question";
import {shuffleAns} from "../helpers/helper"


const Quiz = () => {
    const {quizState, setQuizState} = useContext(QuizContext);
    const {currentQuestionIndex, setCurrentQuestionIndex} = useContext(QuizContext);
    const {currentAnswer, setCurrentAnswer} = useContext(QuizContext);
    const {score,setScore}=useContext(QuizContext);
    const {questions}=useContext(QuizContext);
    const {answers,setAnswers}=useContext(QuizContext);

    let questionSize = data.length;//TODO: question length

    const finishQuiz = () => {
        //TODO: set score
        setCurrentQuestionIndex(0);
        setQuizState("score")
    };

    const mainMenu = () => {
        //TODO: init params
        setScore(0);
        setQuizState("main");
    };

    const nextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex+1);
        setCurrentAnswer("");
        setAnswers(shuffleAns(questions[currentQuestionIndex+1]));
        // setAnswers([]);
        // answers(shuffleAns(questions[currentQuestionIndex]));
        //TODO: set score
    };

    return (
        <div className="quiz">
            {quizState === "score" && (
                <>
                    <div>
                        result: {score}
                    </div>
                    <div onClick={mainMenu}>
                        Main Menu
                    </div>
                </>
            )}
            {quizState === "quiz" && (
                <>
                    <Question/>
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
                </>
            )}
        </div>
    )
};

export default Quiz;