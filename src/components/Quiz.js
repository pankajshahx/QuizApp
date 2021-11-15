import React,{useState,useContext} from 'react';
import { QuizContext } from '../helper/Contexts';
import { Questions } from '../helper/Questions';

function Quiz() {
    const {score,user,setScore,setquizState} = useContext(QuizContext);

    const [color1,setColor1] = useState("white");
    const [color2,setColor2] = useState("white");
    const [color3,setColor3] = useState("white");
    const [color4,setColor4] = useState("white");

    const [currQues,setCurrQues] = useState(0);
    const [optionChosen,setOptionChosen] = useState("");

    const nextQuestion=()=>{

        setColor1("white");
        setColor2("white");
        setColor3("white");
        setColor4("white");
        if(Questions[currQues].answer == optionChosen){
            setScore(score+1);
            setOptionChosen("");
        }
        //console.log(optionChosen);
        setCurrQues(currQues+1);
    };

    const finishQuiz=()=>{
        if(Questions[currQues].answer == optionChosen){
            setScore(score+1);
        }
        setquizState("endScreen");


    };

    const funcA = () =>{
        setOptionChosen("A");

        
        
        setColor1("aqua");
        setColor2("white");
        setColor3("white");
        setColor4("white");
    }
    const funcB = () =>{
        setOptionChosen("B");

        setColor1("white");
        setColor2("aqua");
        setColor3("white");
        setColor4("white");
    }
    const funcC = () =>{
        setOptionChosen("C");

        setColor1("white");
        setColor2("white");
        setColor3("aqua");
        setColor4("white");
    }
    const funcD = () =>{
        setOptionChosen("D");

        setColor1("white");
        setColor2("white");
        setColor3("white");
        setColor4("aqua");
    }

    return (
        <div className="Quiz">
            
            <h1>{Questions[currQues].id}. {Questions[currQues].prompt}</h1>
            <div className="options">
                <button className="btn" style={{backgroundColor:color1}} onClick = {funcA}>{Questions[currQues].optionA}</button>
                <button className="btn" style={{backgroundColor:color2}} onClick = {funcB}>{Questions[currQues].optionB}</button>
                <button className="btn" style={{backgroundColor:color3}} onClick = {funcC} >{Questions[currQues].optionC}</button>
                <button className="btn" style={{backgroundColor:color4}} onClick = {funcD} >{Questions[currQues].optionD}</button>
            </div>
            {currQues==Questions.length-1?(
                <button className="finish" onClick={finishQuiz}>Finish Quiz</button>
            ):(
                <button className="next"  onClick={nextQuestion}>Next Question</button>
            )}
               
        </div>
        
    );
}

export default Quiz;
