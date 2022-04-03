import React, {useContext} from "react";
import {QuizContext} from "../contexts/quizContext";
import Question from "./Question";

const Quiz = () => {
    const {quizState, setQuizState} = useContext(QuizContext);

    return (
        <div className="quiz">
            {quizState === 'gameOver' && (
                <div>
                    result
                </div>
            )}
            {quizState === 'playing' && (
                <Question/>
            )}
        </div>
    )
};

export default Quiz;