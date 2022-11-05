import './App.css';
import ToDo from './ToDo'
import { useState } from 'react'

function App() {
  const [text, setText] = useState([]);

  return (
    <div>
        <div id="title">
          <h1 id="gorgeous">Gorgeous</h1>
          <h1 id="todo">Todo</h1>
        </div>
      <div className="App">
        <ToDo />
        <ToDo />
        <ToDo />
      </div>
    </div>
  );
}

export default App;
