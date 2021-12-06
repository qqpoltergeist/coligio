import React from 'react';


import LessonItem from "./LessonItem";
import {Route, Router, Routes} from "react-router";
import MenuForm from "./MenuForm";
import LessonPart1 from "./Lesson-part1";

const LessonList = ({title, posts, part1}) => {

    let part = 0;
    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>

                {posts.map((post) =>

                    <LessonItem  post={post} key={post.id} />
                )}


        </div>
    );
};

export default LessonList;