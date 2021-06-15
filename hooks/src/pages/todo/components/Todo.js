import React from 'react';

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
        <div className="container">
            <li className={`todo-item ${todo.completed ? "mark" : ""}`}>{text}</li>
            <button onClick={completeHadler} className="btn btn-success">
            ✔
            </button>
            <button onClick={deleteHandler} className="btn btn-danger">
            ✖
            </button>
        </div>
    );
};
export default Todo;