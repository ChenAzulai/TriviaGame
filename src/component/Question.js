import React, {useContext} from "react";
import {QuizContext} from "../contexts/quizContext";
import Answer from "./Answer";

const Question = () => {
    const {quizState, setQuizState} = useContext(QuizContext);
    const {currentQuestionIndex, setCurrentQuestionIndex} = useContext(QuizContext)
    return (
        <div>
            <div className="question">This is question number 1</div>
            <div className="answers">
                <Answer/>
            </div>
        </div>
    )
};

export default Question;