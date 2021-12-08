import React, {useState} from 'react';
import Button from "../UI/Button";
import LessonPart1 from "./Lesson-part1";
import MenuForm from "./MenuForm";
import {useNavigate} from "react-router-dom";
import {store} from "../index";

const LessonPart2 = ({questions, id, length}) => {




    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [rightQuestions, setRightQuestions] = useState(0)
    const [result, setResult] = useState(false)
    const history = useNavigate();

    function handleClickRight() {
        history(`/lessons/lesson${id}/2`);
    }

    function handleClickWrong() {
        history(`/lessons`);
    }

    const handleAnswerButtonClick = (answerOption) => {
        if (answerOption === store.answerTest[currentQuestion]){
            console.log(answerOption)
                setRightQuestions( rightQuestions+1);
        }
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < length) {
            setCurrentQuestion(nextQuestion);
        }
        if (nextQuestion === length){
            setResult(true)
        }

    };


    if (!result){
    return (

        <div className="LoginForm">
            <form className="form">
                <h1>Вопрос {currentQuestion+1}/{length}</h1>
                <h2>{questions[currentQuestion].questionText}</h2>

                <div className='answer-section'>
                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (

                        <Button onClick={() => handleAnswerButtonClick(answerOption)} key={index+1}>
                            {answerOption}
                        </Button>
                    ))}
                </div>

            </form>
        </div>
    );}
    else {


        let spanText, buttonText, rightWrong;

        if (rightQuestions < length/2)
        {
            spanText = "Вы совершили слишком много ошибок!";
            buttonText = "Вернуться к урокам";
            rightWrong = true;
        }
        else {
            buttonText = "Далее";
            rightWrong = false;
        }

        return (<div className="LoginForm">
        <form className="form">
        <h1>Вы ответили правильно на {rightQuestions} из {length} вопросов</h1>
            <span style={{margin: "10px"}}>{spanText}</span>
            <Button
                color="primary"
                onClick={() => {
                    if (rightWrong){
                            handleClickWrong()
                    } else { handleClickRight()}

                }}
            >
                {buttonText}
            </Button>
        </form>
    </div>)}

};

export default LessonPart2;