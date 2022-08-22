import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Button from "../UI/Button";
import CustomInput from "../UI/CustomInput";
import {observer} from "mobx-react-lite";
import {Context, store} from "../index";


const LessonPart3 = ({questions, id, length}) => {
        const [currentQuestion,setCurrentQuestion] = useState(0);
    const [rightQuestions, setRightQuestions] = useState(0);
    const [result, setResult] = useState(false);
    const [answer, setAnswer] = useState('');
    const [idEdit,setId] = useState(store.user.id)
    const [nickname,setNickname ] = useState(store.user.nickname)
    const [password, setPassword] = useState(store.password)
    const [level,setLevel] = useState(store.user.level)
    const history = useNavigate();




    const handleAnswerButtonClick = (answerOption) => {
        if (answerOption === store.answerExam[currentQuestion]) {
            setRightQuestions(rightQuestions + 1);
        }
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < length) {
            setCurrentQuestion(nextQuestion);
        }
        if (nextQuestion === length) {
            setResult(true)
        }


    }
    function handleClickRight() {
            if (level < id) {
                store.edit(idEdit, nickname, level + 1)
            }

        history(`/lessons`);
    }

    function handleClickWrong() {
        history(`/`);
    }


    if (!result){
    return(
        <div className="LoginForm">
            <form className="form" noValidate>
                <h1>Вопрос {currentQuestion+1}/{length}</h1>
                <h2>{questions[currentQuestion].questionText}</h2>
                <div className='answer-section'>
                    <CustomInput
                        value={answer}
                        handleChange={e => setAnswer(e.target.value)}
                        id="input"
                        autoComplete="new-password"
                        inputProps={{
                            autoComplete:"off"
                        }}


                        formControlProps={{
                            fullWidth: true
                        }}
                    />
                    <Button
                        onClick={()=> {
                            handleAnswerButtonClick(answer);
                            document.getElementById('input').value = ''
                        }}
                        type="button"
                        color="primary"
                        className="form__custom-button">
                        Далее
                    </Button>
                </div>

            </form>
        </div>
    );
    }

    else{


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

        return(<div className="LoginForm">
            <form className="form">
                <h1>Вы ответили правильно на {rightQuestions} из {length} вопросов</h1>
                <span style={{margin: "10px"}}>{spanText}</span>
                <Button
                    color="primary"
                    onClick={() => {
                        if (rightWrong){
                            handleClickWrong();

                        } else { handleClickRight()}

                    }}
                >
                    {buttonText}
                </Button>
            </form>
        </div>)
    }
}


export default LessonPart3;