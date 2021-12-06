import React, { useContext } from "react";
import "../styles/LoginForm.css";

import Button from "../UI/Button";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const MenuForm = () => {



    const {store} = useContext(Context);

    return (
        <div>
            <div className="LoginForm">
                <form className="form">
                    <Link to='/login' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <Button
                        type="button"
                        color="primary"
                        className="form__custom-button">
                        Логин
                    </Button>
                    </Link>
                    <Link to='/register' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <Button
                        type="button"
                        color="primary"
                        className="form__custom-button">
                        Регистрация
                    </Button>
                    </Link>
                    <Link to="/lessons"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <Button
                        type="button"
                        color="primary"
                        className="form__custom-button">
                        Занятия
                    </Button>
                    </Link>
                    <Button

                        type="button"
                        color="primary"
                        className="form__custom-button">
                        Запоминание
                    </Button>

                    <Button style={{display: store.isAuth ? '': 'none'}}
                        onClick={()=> {store.logout()} }
                        type="button"
                        color="primary"
                        className="form__custom-button">
                        Выйти из аккаунта

                    </Button>

                </form>
            </div>
        </div>
    );
};

export default observer(MenuForm);