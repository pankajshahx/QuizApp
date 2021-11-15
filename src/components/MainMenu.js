import React,{useContext, useState} from 'react';
import { QuizContext } from '../helper/Contexts';
import '../App.css' ;



function Mainmenu() {

    

    const handleChange = (e) =>{
        setUsername(e.target.value);
    }

    const {quizState,setquizState,setUsername,user} = useContext(QuizContext);
    return (
        <div className="Menu">
            <h3 className="fullname">Full Name</h3>
            <input className="user" type="text" value={user} onChange={handleChange}  />
            <button style={{backgroundColor:'lightgreen'}} onClick={()=>{
                if(user==""){
                    alert("Please enter your name");
                }else{
                    setquizState("quiz");
                }
            }}>Start Quiz</button>
        </div>
    )
}

export default Mainmenu
