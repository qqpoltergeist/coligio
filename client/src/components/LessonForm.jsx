import React, {useState} from 'react';
import "../styles/LoginForm.css";

import {Link, useNavigate} from "react-router-dom";
import LessonList from "./LessonList";
import Button from "../UI/Button";
import {Route, Router, Routes} from "react-router";
import LessonPart1 from "./Lesson-part1";
import {store} from "../index";

const LessonForm = () => {
    const [auth, setAuth] = useState(store.isAuth)
    const [posts, setPosts] = useState([
        {id: 1, title: 'Урок 1', body: ' Основы - часть 1'},
        {id: 2, title: 'Урок 2', body: ' Основы - часть 2'},
        {id: 3, title: 'Урок 3', body: ' Множественное число'},
        {id: 4, title: 'Урок 4', body: ' Существительные'},
        {id: 5, title: 'Урок 5', body: ' Предлоги'},
        {id: 6, title: 'Урок 6', body: ' Прилагательные'},
        {id: 7, title: 'Урок 7', body: ' Вопросительные предл.'},
        {id: 8, title: 'Урок 8', body: ' Указательные местоимения'},
        {id: 9, title: 'Урок 9', body: ' Личные местоимения'},
        {id: 10, title: 'Урок 10', body: ' Глаголы'},
    ])



    const history = useNavigate();
    function handleClick() {

            history('/');

    }

    return (
        <div>
                <div className="LoginForm">
                    <form className="form">
                    <LessonList posts={posts}  />

                        <Button
                            onClick={()=> {
                                handleClick()
                            }}
                            type="button"
                            color="primary"
                            className="form__custom-button">
                            Назад
                        </Button>
                    </form>
                </div>
        </div>
    );
};

export default LessonForm;