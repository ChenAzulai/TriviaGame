import React, {Component, useState} from "react"
import "./App.css"
import {QuizContext} from "./contexts/quizContext";
import Main from "./component/Main";
import Quiz from "./component/Quiz";

function App() {
    const [quizState, setQuizState] = useState("main");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState("");
    const [score, setScore] = useState(0);

    return (
        <div className="App">
            <h1>Quiz Game</h1>
            < QuizContext.Provider
                value={{
                    quizState,
                    setQuizState,
                    currentQuestionIndex,
                    setCurrentQuestionIndex,
                    currentAnswer,
                    setCurrentAnswer,
                    score,
                    setScore,
                }}
            >
                {quizState === "main" && <Main/>}
                {quizState === "quiz" && <Quiz/>}
                {quizState === "score" && <Quiz/>}
            </QuizContext.Provider>
        </div>
    );
}

export default App;
