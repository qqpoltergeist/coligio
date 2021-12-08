import React, {useContext, useState} from 'react';
import {Context, store} from "../index";
import {observer} from "mobx-react-lite";
import Button from "../UI/Button";
import {useNavigate} from "react-router-dom";

const LearnWordsForm = () => {
    const {store} = useContext(Context)
    const [next, setNext] = useState(false)
    const [access, setAccess] = useState(0)
    const [fail, setFail] = useState(0)
    const [index, setIndex] = useState(0)
    const [empty, setEmpty] = useState(true)
    const history = useNavigate();

    function HandleClick() {
        store.getPossibleWords(localStorage.getItem('userId'))
        store.listAllWords();
        store.listTodayWords(localStorage.getItem('userId'))
        history('/words')
    }

    let similarIndex = store.wordssList.findIndex(item => item._id === store.todayWordss[index].idWord)



    function handleShow (){
        setNext(true)
        setAccess(store.todayWordss[index].accessDays)
        setFail(store.todayWordss[index].failDays)
    }
    function handleDelete(){
        store.deleteWords(store.user.id,store.todayWordss[index].idWord)
        setNext(false)
        const nextIndex = index +1
        if(nextIndex < store.todayWordss.length){
        setIndex(nextIndex)} else {
            setEmpty(false)
        }
    }

    function handleAccess(){
        setNext(false)
        store.addWords(store.user.id,store.todayWordss[index].idWord,access)
        const nextIndex = index +1
        if(nextIndex < store.todayWordss.length){
            setIndex(nextIndex)} else {
            setEmpty(false)
        }

    }

    function handleFail(){
        setNext(false)
        store.addWords(store.user.id,store.todayWordss[index].idWord,fail)
        const nextIndex = index +1
        if(nextIndex < store.todayWordss.length){
            setIndex(nextIndex)} else {
            setEmpty(false)
        }

    }



    if(empty){
    return (
        <div>
                <div className="LoginForm">

                    <form className="form">
                        <h1>{store.wordssList[similarIndex].englishWord}</h1>
                        <h2 style={{display: next ? '' : 'none'}}>{store.wordssList[similarIndex].russianWord}</h2>
                        <Button
                            style={{display: next ? 'none' : ''}}
                            type="button"
                            color="github"
                            className="form__custom-button"
                            onClick={() => {handleShow()}}
                        >
                            Показать слово
                        </Button>
                        <div>
                            <Button
                                style={{display: next ? '' : 'none'}}
                                type="button"
                                color="google"
                                className="form__custom-button"
                                onClick={() => {handleDelete()}}
                            >
                                Удалить
                            </Button>
                            <Button
                                style={{display: next ? '' : 'none'}}

                                type="button"
                                color="primary"
                                className="form__custom-button"
                                onClick={() => {handleAccess()}}
                            >
                                {access}
                            </Button>
                            <Button
                                style={{display: next ? '' : 'none'}}
                                type="button"
                                color="primary"
                                className="form__custom-button"
                                onClick={() => {handleFail()}}
                            >
                                {fail}
                            </Button>

                        </div>
                    </form>
                </div>
        </div>
    );} else {
        return (<div className="LoginForm">

            <form className="form">
                <span>Новых слов нет!</span>
                <Button
                    type="button"
                    color="primary"
                    className="form__custom-button"
                    onClick={() => {
                        HandleClick()
                    }}

                >Назад</Button>
            </form>
        </div>)
    }

};

export default observer(LearnWordsForm);