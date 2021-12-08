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
        {id: 1, title: 'Урок 1', body: ' Местоимения - часть 1'},
        {id: 2, title: 'Урок 2', body: ' Местоимения - часть 2'},
        {id: 3, title: 'Урок 3', body: ' Глагол to be'},
    ])



    const history = useNavigate();
    function handleClick() {

            history('/');

    }
    let message;


    message = 'Без регистрации вам доступен только первый уровень'


    return (
        <div>
                <div className="LoginForm">
                    <form className="form">
                        <span>{!auth ? message: ''}</span>
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