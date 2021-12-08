import React, {useContext} from 'react';
import Button from "../UI/Button";
import {Routes, Route, useNavigate} from "react-router-dom";
import AddWordsForm from "./AddWordsForm";
import {Context, store} from "../index";


const WordsForm = () => {

    const history = useNavigate();
    function HandleClick() {
        history('add')

    }
    function HandleLearn() {

        history('learn')
    }
    return (

        <div>
            <div className="LoginForm">

                <form className="form">

            <Button
                type="button"
                color="primary"
                className="form__custom-button"
                onClick={() => {HandleClick()}}
            >
                Добавление в словарь
            </Button>

            <Button
                style={{marginBottom: '40px'}}
                onClick={() => {HandleLearn()}}
                type="button"
                color="primary"
                className="form__custom-button"
            >
                Изучение слов
            </Button>

                    <Button
                        style={{marginTop: '40px'}}
                        onClick={() => { history('/')}}
                        type="button"
                        color="primary"
                        className="form__custom-button"
                    >Назад</Button>
                </form>
                    </div>

            
        </div>
    );
};

export default WordsForm;