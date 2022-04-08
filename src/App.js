import React, {useState, useEffect} from "react"
import "./App.css"
import {QuizContext} from "./contexts/quizContext";
import Main from "./component/Main";
import Quiz from "./component/Quiz";

function App() {

    const [quizState, setQuizState] = useState("");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [currentName, setCurrentName] = useState("");


    const getResultsFromStorage = () => {
        const resultsItem = localStorage.getItem('resultsTable');
        if (resultsItem) {
            const resultArr = JSON.parse(resultsItem);
            console.log('LocalStorage records: ', resultArr);
            return resultArr.sort((a, b) => b[0] - a[0])
                ;
        } else {
            console.log('LocalStorage has no records: ');
        }
        return [];
    };

    useEffect(() => {
        const url = "https://opentdb.com/api.php?amount=100";
        fetch(url)
            .then(resp => resp.json())
            .then(data => setQuestions(data.results))
            .then(() => setQuizState("main"));
    }, []);

    const resultsRecords = getResultsFromStorage();

    return (
        <div className="App">
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
                    setQuestions,
                    answers,
                    setAnswers,
                    currentName,
                    setCurrentName,
                }}
            >
                <h1>Quiz Game</h1>
                {questions.length === 0 && <div>Loading...</div>}
                {quizState === "main" &&
                <table id="Records-table" style={{width: 'fit-content', display: 'inline-block'}}>
                    <tbody>
                    <tr>
                        <th>User Name</th>
                        <th>Score</th>
                    </tr>
                    {resultsRecords.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item[1]}</td>
                                    <td>{item[0]}</td>
                                </tr>
                            )
                        }
                    )}
                    </tbody>
                </table>
                }


                {quizState === "main" && <Main/>}
                {quizState === "quiz" && <Quiz/>}
                {quizState === "score" && <Quiz/>}
            </QuizContext.Provider>
        </div>
    );
}

export default App;
