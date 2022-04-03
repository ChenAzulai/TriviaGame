import React, {Component, useState} from "react"
import "./App.css"
import {QuizContext} from "./contexts/quizContext";
import Main from "./component/Main";

function App() {
    const [quizState, setQuizState] = useState("main")
    return (
        <div className="App">
            <h1>Quiz Game</h1>
            < QuizContext.Provider
                value={{
                    quizState,
                    setQuizState,
                }}
            >
                {quizState === "main" && <Main/>}
                {quizState === "playing" && <div>playing</div>}
                {quizState === "score" && <div>score</div>}
            </QuizContext.Provider>
        </div>
    );
}
export default App;
