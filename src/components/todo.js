import React from 'react'

function ToDo(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" 
            checked={props.completed} 
             />
            <p>
                {props.text}
            </p>
            <hr></hr>
        </div>

    )
}

export default ToDo