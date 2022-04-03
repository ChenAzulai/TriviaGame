import React, {useContext} from "react";
import {QuizContext} from "../contexts/quizContext";
import Question from "./Question";

const Quiz = () => {
    const {quizState, setQuizState} = useContext(QuizContext);
    const {currentQuestionIndex, setCurrentQuestionIndex} = useContext(QuizContext);
    const {currentAnswer, setCurrentAnswer} = useContext(QuizContext);


    return (
        <div className="quiz">
            {quizState === 'gameOver' && (
                <div>
                    result
                </div>
            )}
            {quizState === 'playing' && (
                <>
                    <Question/>
                    {currentAnswer && (
                        <div>
                            Next question or Finish Game
                        </div>
                    )}
                </>
            )}
        </div>
    )
};

export default Quiz;