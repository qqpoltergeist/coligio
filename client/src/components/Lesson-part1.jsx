import React, {useContext, useState} from 'react';
import Button from "../UI/Button";
import {useNavigate} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {set} from "mobx";

const LessonPart1 = (props) => {

    const {store} = useContext(Context)
    const history = useNavigate();
    const [change,setChange] = useState(false)
    function handleClick() {
        store.getAnswersExam(props.info.id);
        store.getAnswersTest(props.info.id)
        history(`1`);
    }

    function handleExam() {
        store.getAnswersExam(props.info.id);
        history('2');
    }
    function handleChange() {
        setChange(true)

    }

    if (change){
    return (
        <div className="LoginForm">
            <form className="form">
                <h1 style={{textAlign: "center"}}>
                   {props.info.title}
                </h1>
                <div >{props.info.body}</div>
                <Button
                    onClick={()=> {
                        handleClick()
                    }}
                    type="button"
                    color="primary"
                    className="form__custom-button">
                    Далее
                </Button>
            </form>
        </div>
    ); }else{

            return (
                <div>
                    <div className="LoginForm">
                        <form className="form">
                            <div >{props.info.short}</div>
                            <Button
                                onClick={()=> {
                                    handleChange()
                                }}
                                type="button"
                                color="primary"
                                className="form__custom-button">
                                Далее
                            </Button>
                            <Button
                                onClick={()=> {
                                    handleExam()
                                }}
                                type="button"
                                color="primary"
                                className="form__custom-button">
                                Перейти к экзамену
                            </Button>
                        </form>
                    </div>
                </div>
            )

    }
};

export default observer(LessonPart1);