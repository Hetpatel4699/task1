import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddTodo } from './Components/AddTodo';
import { TodoLists } from './Components/TodoLists';
import Api from './utils/api';

const App = () => {
  return (
    <div className="container p-4 mt-2">
      <h2>Todo Application</h2>
      {/* <AddTodo />
      <TodoLists /> */}
      <Api />
    </div>
  );
}

export default App;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import "./App.css"
// import { decrement, increment } from './Assets/Screens/reduxCounter/actions';

// const App = () => {
//   const counter = useSelector((state) => state.reducer.count);
//   const dispatch = useDispatch();

//   const handleIncrement = () => {
//     dispatch(increment(1));
//   };

//   const handleDecrement = () => {
//     dispatch(decrement(1));
//   };

//   return (
//     <div className='app'>
//       <h1>Counter {counter} </h1>
//       <div className="btnGroup">
//         <button className='btnStyle' onClick={() => handleIncrement()}>+</button>
//         <button className='btnStyle' onClick={() => handleDecrement()}>-</button>
//       </div>
//     </div>
//   )
// }

// export default App

// import { AddTodo } from "./Assets/Screens/TodoLocalStorage/AddTodo";
// import { Routes, Route } from "react-router-dom";
// import React from "react";

// const App = () => {

//   return (
//     <>
//       {/* <Header title="My Todos List" searchBar={false} /> */}
//       {/* <Routes>
//         <Route path="" element={<AddTodo />} /> */}
//         {/* <Route path="/about" element={<About />} /> */}
//       {/* </Routes> */}
//       {/* <Footer /> */}
      
     
//     </>
//   );
// }
// export default App

// import React, { useState, useEffect } from 'react';
// import Todo from './Assets/Screens/TodoLocalStorage/Todo';
// import TodoForm from './Assets/Screens/TodoLocalStorage/TodoForm';

//  const App = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const storedTodos = localStorage.getItem('todos');
//     if (storedTodos) {
//       setTodos(JSON.parse(storedTodos));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   const addTodo = (text) => {
//     const newTodo = { text, isCompleted: false };
//     setTodos([...todos, newTodo]);
//   };

//   const completeTodo = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
//     setTodos(updatedTodos);
//   };

//   const removeTodo = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos.splice(index, 1);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div className="app">
//       <h1>Todo App</h1>
//       <TodoForm addTodo={addTodo} />
//       <div className="todo-list">
//         {todos.map((todo, index) => (
//           <Todo
//             key={index}
//             index={index}
//             todo={todo}
//             completeTodo={completeTodo}
//             removeTodo={removeTodo}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;




// import './App.css';
// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Data from "./Assets/Screens/FormWithValidation/Data";
// import Formi from "./Assets/Screens/FormWithValidation/Formi";

// const App = () => {
//   return (
//     <>
//       {/* <div
//         className="mainHeader"
//       >
//         <Link
//           style={{
//             marginRight: "7px",
//           }}
//           to="/"
//         >
//           Home
//         </Link>
//         <Link
//           style={{
//             marginRight: "7px",
//           }}
//           to="/data"
//         >
//           Data
//         </Link>
//         </div> */}
//       <div
//         className="mainDiv"
//       >
//         <Routes>
//           <Route path="/" element={<Formi />} />
//           <Route path="/data" element={<Data />} />
//         </Routes>
//       </div>
//     </>
//   );
// };

// export default App;


// import React from 'react';
// import './App.css';
// import Counter from './Assets/Screens/Counter';
// import TemperatureControl from './Assets/Screens/TemperatureControl';
// import FormWithValidation from './Assets/Screens/FormWithValidation/index.js';

// function App() {
//   return (
//     <div className="App">
//     <FormWithValidation/>
//     {/* <TemperatureControl/> */}
//     {/* <Counter/> */}
  
      
//     </div>
//   );
// }

// export default App;
 
// import React from 'react';
// import './App.css';
// // import {  } from 'react-router-dom'
// import { BrowserRouter,Routes, Route } from 'react-router-dom'
// import PersonalDataForm from "./Assets/Screens/FormWithValidation/index"
// import Show from "./Assets/Screens/show/index"

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="" element={ <PersonalDataForm/>}/>
//       <Route path="/show" element={ <Show/>}/>
//     </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
