import React, { useContext } from "react";
import "../styles/LoginForm.css";

import Button from "../UI/Button";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context, store} from "../index";
import image from "../images/profile.png"

const MenuForm = () => {



    const {store} = useContext(Context);
    let check, check2;
    if(store.isAuth && store.user.isActivated){
        check = true;
    } else {check = false;}

    if(store.isAuth && !store.user.isActivated){
        check2 = true;
    } else {check2 = false;}

    return (
        <div>
            <div className="LoginForm">

                <form className="form">
                    <Link to='/profile' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <img src={image} style={{width: '30px', height: '30px', display: check ? '': 'none'}}/>
                    </Link>

                    <Link to='/login' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <Button
                        type="button"
                        color="primary"
                        className="form__custom-button"
                        style={{display: check ? 'none': ''}}
                    >
                        Логин
                    </Button>
                    </Link>
                    <Link to='/register' style={{ color: 'inherit', textDecoration: 'inherit', display: check ? 'none': ''}}>
                    <Button
                        type="button"
                        color="primary"
                        className="form__custom-button"
                        style={{display: check ? 'none': ''}}>
                        Регистрация
                    </Button>
                    </Link>
                    <Link to="/lessons"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <Button
                        style={{display: check ? '': 'none'}}
                        type="button"
                        color="primary"
                        className="form__custom-button">
                        Занятия
                    </Button>
                    </Link>
                    <Link to="/words"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <Button
                        style={{display: check ? '': 'none'}}
                        onClick={()=> {
                            store.listAllWords();
                            store.getPossibleWords(localStorage.getItem('userId'))
                            store.listTodayWords(localStorage.getItem('userId'))
                        }}
                        type="button"
                        color="primary"
                        className="form__custom-button">
                        Запоминание
                    </Button>
                    </Link>
                    <Button style={{display: store.isAuth ? '': 'none'}}
                        onClick={()=> {store.logout()} }
                        type="button"
                        color="primary"
                        className="form__custom-button">
                        Выйти из аккаунта

                    </Button>
                    <span>{check2 ? 'Подтвердите аккаунт на почте': ''}</span>
                </form>
            </div>
        </div>
    );
};

export default observer(MenuForm);