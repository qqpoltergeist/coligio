import React, { useState, useContext } from "react";
import "../styles/LoginForm.css";
import CustomInput from "../UI/CustomInput";
import Button from "../UI/Button";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

import {Link, useNavigate} from "react-router-dom";
const LoginForm = () => {

    const [email,setEmail] = useState('')
    const [login, setLogin] = useState(false)
    const [password, setPass] = useState('')
    const {store} = useContext(Context);
    const history = useNavigate();


    function handleClick() {

            history('/');
    }




    return (
        <div>
            <div className="LoginForm">
                <form className="form">
                    <CustomInput
                        value={email}
                        handleChange={e => setEmail(e.target.value)}
                        labelText="Почта"
                        type="email"
                    />
                    <CustomInput
                        value={password}
                        handleChange={e => setPass(e.target.value)}
                        labelText="Пароль"
                        id="password"
                        formControlProps={{
                            fullWidth: true
                        }}

                        type="password"
                    />

                    <Button
                        onClick={()=> {
                             store.login(email,password);
                             setLogin(store.isAuth);
                             handleClick();

                        }}
                        type="button"
                        color="primary"
                        className="form__custom-button">
                        Войти
                    </Button>

                </form>
            </div>
        </div>
    );

};

export default observer(LoginForm);