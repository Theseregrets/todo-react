import React, { Component } from 'react';

const TodoItem = (props) => {
    return (<div>
        <input type="checkbox" checked={props.completed} />
        <p>{props.text}</p>
    </div>);
}

export default TodoItem;