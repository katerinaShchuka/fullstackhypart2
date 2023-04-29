import React from "react";

const Statistics = ({arrays}) => {

    return (
        <div>

            <ul>
            {arrays.map(array => 
            <li key={array.id}>
                {array.name} {array.exercises}
            </li> 
            )}
            </ul>

        <b>Total: {arrays.reduce((acc, currentValue) => acc + currentValue.exercises, 0)} </b>
        </div>
    )
}

export default Statistics;