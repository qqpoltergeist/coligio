import React from 'react';
import LessonList from "./LessonList";
import Button from "../UI/Button";

const LessonPart1 = (props) => {
    return (
        <div className="LoginForm">
            <form className="form">
                <h1 style={{textAlign: "center"}}>
                   {props.info.title}
                </h1>
                <pre>{props.info.body}</pre>
                <Button
                    onClick={()=> {

                    }}
                    type="button"
                    color="primary"
                    className="form__custom-button">
                    Далее
                </Button>
            </form>
        </div>
    );
};

export default LessonPart1;