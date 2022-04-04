import React, {useContext} from "react";
import {QuizContext} from "../contexts/quizContext";

const Answer = ({
                    index,
                    text,
                    answerSelected
                }) => {

    return (
        <button className="answer-text" onClick={()=>answerSelected(text)}>
             {index}.{text}
        </button>
    );
};

export default Answer;