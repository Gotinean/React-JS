import React from 'react';
import { ButtonGroup } from 'react-bootstrap';

const Todo = ({ text, todo, setTodos, todos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHadler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    }
    return (
        <ButtonGroup aria-label="Basic example">
        <div className="gridtodo">
        <div className="text">
            <li className={`todo-item ${todo.completed ? "mark" : ""}`}>{text}</li>
        </div>
        <div className="buttons">
            <button onClick={completeHadler} className="btn btn-success">
            ✔
            </button>
            <button onClick={deleteHandler} className="btn btn-danger">
            ✖
            </button>
        </div>
        </div>
        </ButtonGroup>
        
    );
};
export default Todo;