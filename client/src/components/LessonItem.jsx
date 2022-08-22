import checkmark from '../images/crown.svg'
import React, {useContext} from 'react';
import { useNavigate} from "react-router-dom";
import {Context, store} from "../index";
import {observer} from "mobx-react-lite";



const LessonItem = (props) => {

    const {store} = useContext(Context)
    const history = useNavigate();
    let check, checkComplete;
    if (store.isAuth === false && props.post.id === 1){
        check = true;

    }
    else check = !(store.isAuth === false && props.post.id > 1);

    function handleClick() {
        history(`lesson${props.post.id}`);
    }

    checkComplete = store.user.level >= props.post.id;
    return (

        <div onClick={handleClick} style={{cursor: 'pointer',  display: check ? '': 'none'}}>

            <div className="post">
                    <strong> {props.post.title}: {props.post.body}</strong>
                    <img src={checkmark} style={ { display: checkComplete ?'flex':'none', width: '20px', height: '20px' }} alt="123"/>
            </div>
        </div>

    );
};

export default observer(LessonItem);