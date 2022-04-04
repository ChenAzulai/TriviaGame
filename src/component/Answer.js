import React, {useContext} from "react";
import {QuizContext} from "../contexts/quizContext";

const Answer = ({
                    index,
                    text,
                    answerSelected,
                    isEnable,
                }) => {

    return (
        <button className="answer-text"
                onClick={() => answerSelected(text)}
                disabled={isEnable !== "" && isEnable !== text}
        >
            {index}.{text}
        </button>
    );
};

export default Answer;