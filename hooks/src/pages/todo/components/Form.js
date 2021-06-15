import React from 'react';


const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form className="container">
      <input placeholder="Введите дело" value={inputText} onChange={inputTextHandler} type="text" className="input-group-text" />
      <button onClick={submitTodoHandler} className="btn btn-primary" type="submit">
        +
      </button>
      <div className="select-todo">
        <select onChange={statusHandler} name="todos" className="form-select" aria-label="size 3 select example">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}
export default Form;