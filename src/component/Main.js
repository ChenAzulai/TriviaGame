import React, {useContext} from "react";
import {QuizContext} from "../contexts/quizContext";

const Main = () => {
    const {quizState, setQuizState} = useContext(QuizContext);

    return (
        <div className="main">
            <label> Enter Your name:</label>
            <button onClick={() => setQuizState('playing')}>Start Quiz</button>

        </div>
    )
};

export default Main;