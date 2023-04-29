import React from "react";
import Course from "./components/Course";
import Content from "./components/Content";
import Statistics from "./components/Statistics"

const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development' }


  const parts = [

    {
      name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
   {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
  {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
    {
        name: 'Redux',
        exercises: 11,
        id: 4
      } 
    ]

  const arrays = [
    {
      name: 'Node.js',
      exercises: 4,
      id: 1
    },
    {
      name: 'Routing',
      exercises: 3,
      id: 2
    },
    {
      name: 'Middlewares',
      exercises: 7,
      id: 3
    }
  ]

  return (
    <div>
        <Course course={course} />
        <Content parts={parts}/>
        <Statistics arrays={arrays}/>
    </div>
  )
}

export default App;