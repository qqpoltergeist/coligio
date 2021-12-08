import React, {useState} from 'react';
import Button from "../UI/Button";
import {useNavigate} from "react-router-dom";
import {store} from "../index";
import CustomInput from "../UI/CustomInput";

const ProfileForm = () => {

    const history = useNavigate()
    const [nickname, setNick] = useState('')
    const [nickname1, setNick1] = useState('')
    const [password, setPass] = useState('')
    let nick = false;

    function handleClick(){
        history('/')
    }
    function handlePass() {
        store.setPass(password)
        store.editPass(store.user.id,password,store.user.level)
        document.getElementById('password').value = ''
    }
    function handleNick() {
        localStorage.setItem('nickname', nickname)
        store.edit(store.user.id,nickname,store.user.level)
        document.getElementById('nickname').value = ''
        nick = true;
        console.log(nick)
        setNick1(nickname)
    }


    return (
        <div>
            <div className="LoginForm">
                <form className="form">
                    <span>Профиль пользователя <h1>{nick ? nickname1 : localStorage.getItem('nickname')}</h1></span>
                    <span style={{marginTop: '20px'}}>Почта:<h1 style={{fontSize: '95%'}}>{localStorage.getItem('email')}</h1></span>
                    <span style={{marginTop: '20px'}}>Уровень знаний:<h1 style={{fontSize: '95%'}}>{localStorage.getItem('level')}</h1></span>
                    <div className="editStyle">
                        <span>Изменение данных пользователя</span>
                        <CustomInput
                            value={nickname}
                            handleChange={e => setNick(e.target.value)}
                            labelText="Никнейм"
                            id="nickname"
                        />
                        <Button
                            onClick={()=>{handleNick()}}
                            color="github"
                        >Изменить</Button>
                        <CustomInput
                            type="password"
                            value={password}
                            handleChange={e => setPass(e.target.value)}
                            labelText="Пароль"
                            id="password"
                        />
                        <Button
                            onClick={()=>{handlePass()}}
                            color="github"
                        >Изменить</Button>
                    </div>
                    <Button
                        onClick={()=> {
                           handleClick()

                        }}
                        type="button"
                        color="primary"
                        className="form__custom-button">
                        Назад
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;