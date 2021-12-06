import React, {useContext, useEffect} from 'react';
import LoginForm from "./components/LoginForm";
import MenuForm from "./components/MenuForm"
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {Route, Routes} from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LessonForm from "./components/LessonForm";
import LessonPart1 from "./components/Lesson-part1";


const App = ({history}) => {

    const {store} = useContext(Context)
    useEffect(() =>{
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    // if (store.isLoading == false){
    //     return (<div>
    //             Загрузка...
    //         </div>
    //     )
    // }
    return (

                <Routes>
                    <Route exact path='/' element={<MenuForm/>}/>
                    <Route exact path='login' element={<LoginForm/>}/>
                    <Route exact path='register' element={<RegisterForm/>}/>
                    <Route exact path='lessons' element={<LessonForm/>}/>
                    <Route path='lessons/lesson1' element={<LessonPart1 info={{id: 1, title: '11', body: '11'}}/>}/>
                    <Route path='lessons/lesson2' element={<LessonPart1 info={{id: 2, title: '11', body: '11'}}/>}/>
                    <Route path='lessons/lesson3' element={<LessonPart1 info={{id: 3, title: '11', body: '11'}}/>}/>
                </Routes>
    );
};

export default observer(App);