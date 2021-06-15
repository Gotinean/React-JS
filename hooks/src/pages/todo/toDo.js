import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

const ToDo = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        const filterHandler = () => {
            switch (status) {
                case 'completed':
                    setFilteredTodos(todos.filter(todo => todo.completed === true));
                    break;
                case 'uncompleted':
                    setFilteredTodos(todos.filter(todo => todo.completed === false));
                    break;
                default:
                    setFilteredTodos(todos);
                    break;
            }
        };
        filterHandler();
    }, [todos, status]);

    return (
        <div className="container">
            <h1>My TODO List</h1>
            <Form
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                setStatus={setStatus} />
            <ToDoList
                setTodos={setTodos}
                todos={todos}
                filteredTodos={filteredTodos} />
        </div>
    )
}

export default ToDo;