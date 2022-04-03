import React, {Component, useState} from "react"
import "./App.css"
import {QuizContext} from "./contexts/quizContext";
import Main from "./component/Main";
import Quiz from "./component/Quiz";

function App() {
    const [quizState, setQuizState] = useState("main");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    return (
        <div className="App">
            <h1>Quiz Game</h1>
            < QuizContext.Provider
                value={{
                    quizState,
                    setQuizState,
                    currentQuestionIndex,
                    setCurrentQuestionIndex,
                }}
            >
                {quizState === "main" && <Main/>}
                {quizState === "playing" && <Quiz/>}
                {quizState === "score" && <div>score</div>}
            </QuizContext.Provider>
        </div>
    );
}

export default App;
