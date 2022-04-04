import React, {useContext} from "react";
import {QuizContext} from "../contexts/quizContext";
import data from "../DB";
import {shuffleAns} from "../helpers/helper"



const Main = () => {
    const {quizState, setQuizState} = useContext(QuizContext);
    const {score,setScore}=useContext(QuizContext);
    const {questions}=useContext(QuizContext);
    const {answers,setAnswers}=useContext(QuizContext);
    const {currentQuestionIndex, setCurrentQuestionIndex} = useContext(QuizContext);

    function startQuiz() {
       setQuizState("quiz");
        setAnswers(shuffleAns(questions[currentQuestionIndex]));
        setScore(0);
    }

    return (
        <div className="main">
            <label> Enter Your name:</label>
            <button onClick={startQuiz}>Start Quiz</button>

        </div>
    )
};

export default Main;