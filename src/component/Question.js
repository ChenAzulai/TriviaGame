import React, {useContext, useEffect} from "react";
import {QuizContext} from "../contexts/quizContext";
import data from "../DB";
import Answer from "./Answer";

const shuffleAns = (que) => {
    console.log("shuffleAns", que);
    if (!que) {
        return [];
    }
    const ans = [
        que.correct_answer,
        ...que.incorrect_answers,
    ];
    return ans.map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
};

const Question = () => {
    const {quizState, setQuizState} = useContext(QuizContext);
    const {currentQuestionIndex, setCurrentQuestionIndex} = useContext(QuizContext);
    const {currentAnswer, setCurrentAnswer} = useContext(QuizContext);
    const {questions} = useContext(QuizContext);
    const {answers, setAnswers} = useContext(QuizContext);
    // const answersList = shuffleAns(questions[currentQuestionIndex]);
    console.log("currentQuestionIndex: ",currentQuestionIndex);

    const answerClicked = (answerText) => {
        setCurrentAnswer(answerText);
    };

    return (
        <div>
            <div className="question">
                <div>{currentQuestionIndex + 1}/{data.length}</div>
                <div>{data[currentQuestionIndex].question}</div>
            </div>
            <div className="answers">
                {answers.map((answer, index) => (
                        <Answer
                            index={index + 1}
                            answerSelected={(answerText) => answerClicked(answerText)}
                            text={answer}
                        />
                    )
                )}
            </div>
        </div>
    )
};

export default Question;