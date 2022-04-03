import React, {useContext} from "react";
import {QuizContext} from "../contexts/quizContext";
import Question from "./Question";

const Quiz = () => {
    const {quizState, setQuizState} = useContext(QuizContext);
    const {currentQuestionIndex, setCurrentQuestionIndex} = useContext(QuizContext);
    const {currentAnswer, setCurrentAnswer} = useContext(QuizContext);
    const {score,setScore}=useContext(QuizContext);

    let questionSize = 5;//TODO: question length
    const finishQuiz = () => {
        //TODO: set score
        setQuizState("score")
    };

    const mainMenu = () => {
        //TODO: init params
        setScore(0);
        setQuizState("main");
    };

    const nextQuestion = () => {
        //TODO: set score
        //TODO: set setCurrentQuestionIndex
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
            {quizState === "playing" && (
                <>
                    <Question/>
                    {currentAnswer && (
                        <>
                            {currentQuestionIndex === questionSize && (
                                <button onClick={finishQuiz}>
                                    Finish Quiz
                                </button>
                            )}
                            {currentQuestionIndex !== questionSize && (
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