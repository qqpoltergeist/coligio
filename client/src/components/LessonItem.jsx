import React from 'react';
import MyButton from "../UI/button/MyButton";
import Link from "@material-ui/core/Link";
import { useNavigate, Router } from "react-router-dom";
import {store} from "../index";
import LessonPart1 from "./Lesson-part1";
const LessonItem = (props) => {


    const history = useNavigate();
    let check;
    let message;
    if (store.isAuth === false && props.post.id === 1){
        check = true;
        message = 'Без регистрации вам доступен только первый уровень'
    }
    else if (store.isAuth === false && props.post.id > 1){
        check = false;
    }
    else {check = true;}


    function handleClick() {
        history(`lesson${props.post.id}`);
    }


    return (

        <div onClick={handleClick} style={{cursor: 'pointer',  display: check ? '': 'none'}}>

            <div className="post">
                <div className="post__content">
                    <strong> {props.post.title}: {props.post.body}</strong>
                    <div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LessonItem;