import React, {useContext} from "react";
import {QuizContext} from "../contexts/quizContext";

const Main = () => {
    const {quizState, setQuizState} = useContext(QuizContext);

    return (
        <div className="main">
            <button onClick={() => setQuizState('playing')}>change state</button>

        </div>
    )
};

export default Main;