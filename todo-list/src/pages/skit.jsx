// const TodoPage = () => {
//     const [todolist, setTodolist] = useState(['hej', 'kebab', 'pizza', 'handla', 'träna']);
//     const [text, setText] = useState('');

//     const handleClick = () => {
//       // todolist.push('köp äpplen');
//       setTodolist([...todolist, 'köp äpplen']);
//     };

//     return (
//       <div className="todolist">
//         <h1>Todo-list</h1>

//         {/* <label>
//           Text input: <input name="myInput" />
//         </label> */}

//         <label>
//           <input value={text} placeholder="Enter your task here" onChange={(e) => setText(e.target.value)} />
//         </label>

//         {/* <input type="text" value={todolist} placeholder="Enter your task here" onChange={(e) => setTodolist(e.target.value)}></input> */}
//         <ol>
//           {todolist.map((todo) => {
//             return <li>{todo}</li>;
//           })}
//         </ol>
//         <button onClick={handleClick}>Click me</button>
//       </div>
//     );
//   };

//   export default TodoPage;

//   {
//     /* <input>const [text, setText] = useState("")</input>; */
//   }

// import { useState } from 'react';

// export default function Home() {
//   // state för listan
//   const [todos, setTodos] = useState([]);
//   // state för textfältet
//   const [text, setText] = useState('');

//   function addTodo() {
//     // varje todo som skapas får ett id, med hjälp av "Date.now()"
//     const newTodo = {
//       id: Date.now(), // Generera ett unikt id för varje todo(för att kunna remove)
//       text: text, // Texten som användaren har skrivit
//     };
//     // Kopiera listan som redan finns, och lägg till det användaren har skrivit
//     setTodos([...todos, newTodo]);
//     // Återställ textfältet så det blir tomt när man trycker på add-btn
//     // (tom sträng)
//     setText('');
//   }

//   // Funktion som tar emot id som argument för att kunna ta bort
//   function removeTodo(id) {
//     setTodos(todos.filter((todo) => todo.id !== id)); // filtrera bort todo med id:et
//   }

//   return (
//     <main className="flex justify-center">
//       <div className="flex-col">
//         <h2>My To-do List</h2>
//         <input type="text" value={text} placeholder="Enter your task here.." onChange={(e) => setText(e.target.value)}></input>
//         <button className="add-btn" onClick={addTodo}>
//           Add
//         </button>
//         {/* Skapa en ul, som mappar igenom listan, och renderar
//       allt innehåll som en lista. */}
//         <ul>
//           {/* varje todo i listan behöver en key(id) för att kunna raderas. todo.text är
//           själva texten som vi vill visa på sidan */}
//           {todos.map((todo) => (
//             <li key={todo.id}>
//               {todo.text}
//               {/* funktion som skickar med det akutella id:et som argument som ska tas bort */}
//               <button className="remove-btn" onClick={() => removeTodo(todo.id)}>
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </main>
//   );
// }

// import { useState } from 'react';
// import './TodoList.css';

// const TodoList = () => {
//   const [value, setValue] = useState('');
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState('');

//   const addTodo = (todo) => {
//     const newTodo = {
//       id: Date.now(),
//       text: text,
//     };

//     setTodos([...todos, newTodo]);

//     setText('');

//     const removeTodo = (id) => {
//       setTodos(todos.filter((todo) => todo.id !== id));
//     };
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <form className="todolist" onSubmit={handleSubmit}>
//       <input type="text" className="todo-input" placeholder="Enter your task here" onChange={(e) => setValue(e.target.value)} />
//       <button type="submit" className="todo-button">
//         Add task
//       </button>
//       <todoList addTodo={addTodo} />

//       <ol></ol>
//     </form>
//   );
// };

// export default TodoList;
