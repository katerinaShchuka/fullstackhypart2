import React from "react";

const Content = ({parts}) => {
  
    return (
        <div>
            <ul>
            {parts.map(part => 
            <li key={part.id}>
                {part.name} {part.exercises}
            </li> 
            )}
            </ul>

        <b>Total: {parts.reduce((acc, currentValue) => acc + currentValue.exercises, 0)} </b>
        </div>
      
    )
}

export default Content;