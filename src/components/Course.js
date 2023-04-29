import React from "react";

const Course = ({course}) => {
    console.log(course.name)
    return (
        <>
        <div>
            <h1>{course.name}</h1>
        </div>
        </>
    )
}

export default Course;