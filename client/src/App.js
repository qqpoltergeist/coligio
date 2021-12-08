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

        {questionText : "...  — я", answerOptions:["i","you","he"]},
        {questionText : "...— ты", answerOptions:["i","you","he"]},
        {questionText : "... - он", answerOptions:["i","you","he"]}],
        [
            {questionText : "... - мы", answerOptions:["we","you","they"]},
            {questionText : "... - вы", answerOptions:["we","you","they"] },
            {questionText : ".... - они", answerOptions:["we","you","they"]}],
        [
            {questionText : "I ... sure – Я уверен.", answerOptions:["am","is","are"]},
            {questionText : "You ... sure — Ты уверен.", answerOptions:["am","is","are"]},
            {questionText : "He  ... sure — Он уверен", answerOptions:["am","is","are"]}]
    ])

    const [questionsExam,setExam] = useState([
        [

            {questionText : "...  — я"},
            {questionText : "...— ты"},
            {questionText : "... - он"}],
        [
            {questionText : "... - мы"},
            {questionText : "... - вы"},
            {questionText : ".... - они"}],
        [
            {questionText : "I ... sure – Я уверен."},
            {questionText : "You ... sure — Ты уверен."},
            {questionText : "He  ... sure — Он уверен"}]
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


                    <Route path='lessons/lesson1' element={<LessonPart1 info={{id: 1, title: 'Урок 1', short: 'В данном уроке мы будем изучать местоимения в единственном числе', body: 'Первые слова, которые нужны для разговорной речи — это личные местоимения, то есть слова, называющие лицо. В русском языке это я, ты, он, она и другие. Английские личные местоимения, как и русские, могут относиться к трем лицам, быть в единственном и множественном числе. Сегодня мы изучим местоимения в единственном числе'}}/>}/>

                    <Route path='lessons/lesson2' element={<LessonPart1 info={{id: 2, title: 'Урок 2', short: 'В данном уроке мы будем изучать местоимения во множественном числе', body: 'Первые слова, которые нужны для разговорной речи — это личные местоимения, то есть слова, называющие лицо. В русском языке это я, ты, он, она и другие. Английские личные местоимения, как и русские, могут относиться к трем лицам, быть в единственном и множественном числе. Сегодня мы изучим местоимения во множественном числе'}}/>}/>
                    <Route path='lessons/lesson3' element={<LessonPart1 info={{id: 3, title: 'Урок 3', short: 'В данном уроке мы будем изучать глагол to be', body: 'Глагол to be – это самый нужный и употребительный глагол в английском языке. Он значит «быть», «являться». В речи он принимает разные формы в зависимости от лица, числа и времени.\n' +
                            '\n' +
                            'К примеру, в первом лице единственного числа он превращается в am. Возьмем пример с прилагательным sure — уверенный.'}}/>}/>

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