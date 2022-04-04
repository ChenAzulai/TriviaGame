import React, {useState, useEffect} from "react"
import "./App.css"
import {QuizContext} from "./contexts/quizContext";
import Main from "./component/Main";
import Quiz from "./component/Quiz";
import data from "./DB";

function App() {

    const [quizState, setQuizState] = useState("");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [currentName, setCurrentName] = useState("");

    useEffect(() => {
        const url = "https://opentdb.com/api.php?amount=100";
        fetch(url)
            .then(resp => resp.json())
            .then(data => setQuestions(data.results))
            .then(() => setQuizState("main"));
    }, []);

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
                    questions,
                    answers,
                    setAnswers,
                    currentName,
                    setCurrentName,
                }}
            >
                {questions.length === 0 && <div>Loading...</div>}
                {quizState === "main" && <Main/>}
                {quizState === "quiz" && <Quiz/>}
                {quizState === "score" && <Quiz/>}
            </QuizContext.Provider>
        </div>
    );
}

export default App;
