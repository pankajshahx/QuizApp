
import './App.css';
import React,{useState,useContext} from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';

import {QuizContext} from './helper/Contexts'


function App() {
  const [quizState,setquizState] = useState("menu");
  const [score,setScore] = useState(0);
  const [user,setUsername] = useState("");


  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider  value = {{quizState,setquizState,score,setScore,user,setUsername}}>

        {quizState==="menu" && <MainMenu/>}
        {quizState==="quiz" && <Quiz/>}
        {quizState==="endScreen" && <EndScreen/>}
      </QuizContext.Provider>  

    </div>
  );
}

export default App;
