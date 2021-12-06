import React, {useState} from 'react';
import "../styles/LoginForm.css";

import {Link, useNavigate} from "react-router-dom";
import LessonList from "./LessonList";
import Button from "../UI/Button";
import {Route, Router, Routes} from "react-router";
import LessonPart1 from "./Lesson-part1";

const LessonForm = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Урок 1', body: 'zz'},
        {id: 2, title: 'Урок 2', body: 'ff'},
        {id: 3, title: 'Урок 3', body: 'ee'},
    ])
    const [part1, setPart1] = useState([

        {id: 1, title: 'Урок 1', body: 'zz'}

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