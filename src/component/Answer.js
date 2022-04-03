import React, {useContext} from "react";
import {QuizContext} from "../contexts/quizContext";

const Answer = ({
                    index,
                    text
                }) => {

    return (
        <div>
            <div className="answer-text">{index}.{text}</div>
        </div>
    );
};

export default Answer;