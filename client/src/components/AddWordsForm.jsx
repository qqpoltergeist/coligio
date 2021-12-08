import React, {useContext, useState} from 'react';
import Button from "../UI/Button";
import {useNavigate} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AddWordsForm = () => {


        const [currentWord, setCurrentWord] = useState(0);
        const [empty, setEmpty] = useState(true)
        const {store} = useContext(Context)
        const history = useNavigate();

        function HandleClick() {
            store.listAllWords();
            store.getPossibleWords(localStorage.getItem('userId'))
            store.listTodayWords(localStorage.getItem('userId'))
            history('/words')
        }

        function HandleAdd() {
            store.addWords(store.user.id, store.possibleWords[currentWord]._id, 0)
            let nextWord = currentWord + 1
            if (nextWord < store.possibleWords.length) {
                setCurrentWord(nextWord)
            } else {
                setEmpty(false);
            }

        }

        function HandleSkip() {
            let nextWord = currentWord + 1

            if (nextWord < store.possibleWords.length) {
                setCurrentWord(nextWord)
            } else {
                setEmpty(false);
            }
        }

        if (empty) {
            return (
                <div>
                    <div className="LoginForm">

                        <form className="form">

                            <h1>{store.possibleWords[currentWord].englishWord}</h1>
                            <h2>{store.possibleWords[currentWord].russianWord}</h2>
                            <div>
                                <Button
                                    type="button"
                                    color="warning"
                                    className="form__custom-button"
                                    onClick={() => {
                                        HandleAdd()
                                    }}
                                >Добавить</Button>
                                <Button
                                    type="button"
                                    color="warning"
                                    className="form__custom-button"
                                    onClick={() => {
                                        HandleSkip()
                                    }}

                                >Пропустить</Button>

                            </div>

                            <Button
                                type="button"
                                color="primary"
                                className="form__custom-button"
                                onClick={() => {
                                    HandleClick()
                                }}

                            >Назад</Button>

                        </form>
                    </div>
                </div>
            );
        } else {
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

export default observer(AddWordsForm);