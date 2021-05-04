import React, { Component } from 'react';
import todosData from './todoData';


class Todo extends Component {
    state = {
        todosData: todosData
    }
    handleDelete = item => {
        const todoData = this.state.todosData.filter(m => m.id !== item.id);
        this.setState({ todosData: todoData })
    }
    handleDone = item => {
        const todoData = [...this.state.todosData]
        const index = todoData.indexOf(item);
        todoData[index] = { ...todoData[index] };
        todoData[index].clicked = !todoData[index].clicked;
        this.setState({ todosData: todoData })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>status</th>
                            <th>task</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todosData.map(item => <tr key={item.id}>
                            <td><input type="checkbox"
                                onClick={() => this.handleDone(item)}
                            />

                            </td>
                            <td className='m-2'>{item.text}</td>
                            <td><button
                                className='btn btn-danger'
                                onClick={() => this.handleDelete(item)}
                            >Delete</button></td>

                        </tr>)}
                    </tbody>

                </table>
            </div>
        );
    }
}

export default Todo;