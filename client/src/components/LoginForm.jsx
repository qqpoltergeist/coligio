import React, { useState, useContext } from "react";
import "../styles/LoginForm.css";
import CustomInput from "../UI/CustomInput";
import Button from "../UI/Button";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

import {Link, useNavigate} from "react-router-dom";
const LoginForm = () => {

    const [email,setEmail] = useState('')
    const [password, setPass] = useState('')
    const {store} = useContext(Context);
    const history = useNavigate();

    function handleClick() {
        if(store.isAuth === true) {
            history('/');
        }
    }




    return (
        <div>
            <div className="LoginForm">
                <form className="form">
                    <CustomInput
                        value={email}
                        handleChange={e => setEmail(e.target.value)}
                        labelText="Email"
                        type="email"
                    />
                    <CustomInput
                        value={password}
                        handleChange={e => setPass(e.target.value)}
                        labelText="Password"
                        id="password"
                        formControlProps={{
                            fullWidth: true
                        }}

                        type="password"
                    />

                    <Button
                        onClick={()=> {
                             store.login(email,password);
                             handleClick()

                        }}
                        type="button"
                        color="primary"
                        className="form__custom-button">
                        Log in
                    </Button>

                </form>
            </div>
        </div>
    );
};

export default observer(LoginForm);