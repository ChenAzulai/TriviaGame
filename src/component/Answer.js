import React, {useContext} from "react";
import {QuizContext} from "../contexts/quizContext";

const Answer = ({
                    index,
                }) => {

    return (
        <div>
            <div className="answer-text">this is {index} answer</div>
        </div>
    );
};

export default Answer;