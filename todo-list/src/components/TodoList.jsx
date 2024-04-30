// import '/.TodoList.css';

// const Todolist = () => {
//   return <div>TODO</div>;
// };

// export default TodoList;

import { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const localList = localStorage.getItem('todoList');
  // JSON.parse() gör en string till array
  const localListArray = JSON.parse(localList);
  const [list, setList] = useState(localListArray);
  const [input, setInput] = useState('');

  const addTodo = () => {
    const newTodo = {
      id: Math.random(),
      todo: input,
    };

    // add todo to list

    setList([...list, newTodo]);

    // JSON.stringify() gör om array till string
    localStorage.setItem('todoList', JSON.stringify([...list, newTodo]));
    // clear input box

    setInput('');
  };

  const removeTodo = (id) => {
    const newList = list.filter((todo) => {
      return todo.id !== id;
    });
    setList(newList);
    localStorage.setItem('todoList', JSON.stringify(newList));
  };

  const completedText = list.length < 1;

  return (
    <div className="form">
      <h2>Todo list</h2>
      <div className="todolist">
        <input type="text" value={input} className="todo-input" placeholder="Enter your task here" onChange={(e) => setInput(e.target.value)} />
        <button className="todo-btn" onClick={addTodo}>
          Add task
        </button>
      </div>
      {completedText && <p>You have no more task todo!</p>}
      {list.length !== 0 ? (
        <div className="todo-container">
          {list.map((todo) => {
            return (
              // <li key={todo.id}>
              <div key={todo.id} className="todo-item">
                <span>{todo.todo}</span>
                <button className="remove-btn" onClick={() => removeTodo(todo.id)}>
                  {/* &times; */} <img className="trash-icon" src="./trash-icon.png"></img>
                </button>
              </div>
              // </li>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default TodoList;

{
  /* <main>
      <div className="todolist">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button>ADD</button>
      </div>
    </main> */
}
