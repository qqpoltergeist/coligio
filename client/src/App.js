import React, {useContext, useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import MenuForm from "./components/MenuForm"
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {Route, Routes} from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LessonForm from "./components/LessonForm";
import LessonPart1 from "./components/Lesson-part1";
import LessonPart2 from "./components/Lesson-part2";
import LessonPart3 from "./components/Lesson-part3";
import ProfileForm from "./components/ProfileForm";
import WordsForm from "./components/WordsForm";
import AddWordsForm from "./components/AddWordsForm";
import LearnWordsForm from "./components/LearnWordsForm";


const App = ({history}) => {

    const {store} = useContext(Context)
    useEffect(() =>{
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])
    const [questionsTest,setTest] = useState([
        [

        {questionText : "I ... sure – Я уверен.", answerOptions:["am","is","are"]},
        {questionText : "You ... sure — Ты уверен.", answerOptions:["am","is","are"]},
        {questionText : "He  ... sure — Он уверен", answerOptions:["am","is","are"]}],
        [
            {questionText : " 1", answerOptions:["ex-2-1","ex-1-2","ex-1-3","ex-1-4"]},
            {questionText : " 2", answerOptions:["ex-1-1","ex-2-2","ex-1-3","ex-1-4"] },
            {questionText : " 3", answerOptions:["ex-1-1","ex-1-2","ex-2-3","ex-1-4"]}],
        [
            {questionText : " 1", answerOptions:[1,2,3,4]},
            {questionText : " 2", answerOptions:[1,2,3,4]},
            {questionText : " 3", answerOptions:[1,2,3,4]}]
    ])

    const [questionsExam,setExam] = useState([
        [

            {questionText : "I ... sure – Я уверен.",  trueAnswer:'1'},
            {questionText : "You ... sure — Ты уверен.", trueAnswer:'2'},
            {questionText : "He  ... sure — Он уверен", trueAnswer:'3'}],
        [
            {questionText : " 1",  trueAnswer:'1'},
                {questionText : " 2", trueAnswer:'2'},
                {questionText : " 3", trueAnswer:'3'}  ],
        [
            {questionText : " 1",  trueAnswer:'1'},
            {questionText : " 2", trueAnswer:'2'},
            {questionText : " 3", trueAnswer:'3'}]
    ])


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
                    <Route exact path='profile' element={<ProfileForm/>}/>
                    <Route exact path='words' element={<WordsForm/>}/>
                    <Route exact path='words/add' element={<AddWordsForm/>}/>
                    <Route exact path='words/learn' element={<LearnWordsForm/>}/>


                    <Route path='lessons/lesson1' element={<LessonPart1 info={{id: 1, title: 'Урок 1', body: 'Прилагательное — это часть речи, которая обозначает признак, в нашем случае относящийся к лицу, выраженному местоимением. В отличие от глагола, прилагательному не нужно менять свою форму, подстраиваясь под лицо и число местоимения. Прилагательное — самая простая часть речи, поэтому мы начнем строить предложения именно с ним.\n' +
                            '\n' +
                            'Посмотрим, как фраза из трех слов будет выглядеть в зависимости от лица и числа. Мы пока возьмем примеры только в настоящем времени, к прошедшему и будущему вернемся позже.'}}/>}/>
                    <Route path='lessons/lesson2' element={<LessonPart1 info={{id: 2, title: 'Урок 2', body: '11'}}/>}/>
                    <Route path='lessons/lesson3' element={<LessonPart1 info={{id: 3, title: 'Урок 3', body: '11'}}/>}/>

                    <Route path='lessons/lesson1/1' element={<LessonPart2 id="1" questions={questionsTest[0]} length= {questionsTest[0].length}/>}/>
                    <Route path='lessons/lesson2/1' element={<LessonPart2 id="2" questions={questionsTest[1]} length= {questionsTest[1].length}/>}/>
                    <Route path='lessons/lesson3/1' element={<LessonPart2 id="3" questions={questionsTest[2]} length= {questionsTest[2].length}/>}/>

                    <Route path='lessons/lesson1/2' element={<LessonPart3 id="1" questions={questionsExam[0]} length= {questionsExam[0].length}/>}/>
                    <Route path='lessons/lesson2/2' element={<LessonPart3 id="2" questions={questionsExam[1]} length= {questionsExam[1].length}/>}/>
                    <Route path='lessons/lesson3/2' element={<LessonPart3 id="3" questions={questionsExam[2]} length= {questionsExam[2].length}/>}/>
                </Routes>
    );
};

export default observer(App);