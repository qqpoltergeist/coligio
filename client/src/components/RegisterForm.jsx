import React, {  useState, useContext } from "react";
import "../styles/LoginForm.css";
import CustomInput from "../UI/CustomInput";
import Button from "../UI/Button";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
const RegisterForm = () => {

    const [email,setEmail] = useState('')
    const [password, setPass] = useState('')
    const [nickname, setUser] = useState('')
    const {store} = useContext(Context);


    return (
        <div>
            <div className="LoginForm">
                <form className="form">
                    <CustomInput
                        value={email}
                        handleChange={e => setEmail(e.target.value)}
                        formControlProps={{
                            fullWidth: true
                        }}
                        id="email"
                        labelText="Почта"
                        type="email"
                    />
                    <CustomInput
                        value={nickname}
                        handleChange={e => setUser(e.target.value)}
                        labelText="Никнейм"
                        id="username"
                        formControlProps={{
                            fullWidth: true
                        }}
                        type="text"
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

                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <Button
                        onClick={()=> {
                            store.registration(nickname,email,password)

                        } }
                        type="button"
                        color="primary"
                        className="form__custom-button">
                        Зарегистрироваться
                    </Button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default observer(RegisterForm);