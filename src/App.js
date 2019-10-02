import React from 'react';
import './App.css';

class TodoApp extends React.Component {
  render () {
    return (
    <div className="container">
      <input type="text"/>
      <button>Add Todo</button>
      <ul>
        <li>
          <input type="checkbox" />
          <button>Remove</button>
          <span>Hey There!</span>
        </li>
        <li>
          <input type="checkbox" />
          <button>Remove</button>
          <span>Hey There!</span>
        </li>
        <li>
          <input type="checkbox" />
          <button>Remove</button>
          <span>Hey There!</span>
        </li>
        <li>
          <input type="checkbox" />
          <button>Remove</button>
          <span>Hey There!</span>
        </li>
      </ul>
      <h2>Completed Todos</h2>
      <ul>
        <li>
          <input type="checkbox" />
          <button>Remove</button>
          <span>Hey There!</span>
        </li>
        <li>
          <input type="checkbox" />
          <button>Remove</button>
          <span>Hey There!</span>
        </li>
        <li>
          <input type="checkbox" />
          <button>Remove</button>
          <span>Hey There!</span>
        </li>
        <li>
          <input type="checkbox" />
          <button>Remove</button>
          <span>Hey There!</span>
        </li>
      </ul>
    </div>
  );
  }
}

export default TodoApp;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }