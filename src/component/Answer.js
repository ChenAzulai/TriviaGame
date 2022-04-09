import React, {useContext} from "react";

const Answer = ({
                    index,
                    text,
                    answerSelected,
                    isEnable,
                }) => {

    return (
        <button className="answer-text"
                key={index}
                onClick={() => answerSelected(text)}
                disabled={isEnable !== "" && isEnable !== text}
        >
            {index}: {text}
        </button>
    );
};

export default Answer;