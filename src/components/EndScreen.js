
import React,{useContext} from 'react';
import { QuizContext } from '../helper/Contexts';
import '../App.css' ;
import { Questions } from '../helper/Questions';


function EndScreen() {



    const {score , setScore,setquizState,user,setUsername} = useContext(QuizContext);

    const restartQuiz = () =>{
        setScore(0);
        setquizState("menu");
        setUsername("");
    }
    return (
        <div className="endScreen">
            <h1>Quiz Finished</h1>
            <h2 className="username">{user}! Your Total Score is</h2>
            <h1>{Questions.length}/{score}</h1>
            <button style={{backgroundColor:'lightgreen'}} onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen
