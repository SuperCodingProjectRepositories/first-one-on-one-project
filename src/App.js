import './App.css';
import ToDoListItems from './components/ToDoListItems';
import ListItem from './models/ListItem';
import {useState} from "react";

function App() {
  // ToDoList 클래스 인스턴스 생성
  const [todos, setTodos] = useState([
    new ListItem(1, 'Learn React', 'Understand components and props', '2025-02-01', 'Study'),
    new ListItem(2, 'Build a Todo App', 'Practice React fundamentals', '2025-02-10', 'Work'),
  ]);

  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => todo.id === id ? {...todo, checked: !todo.checked} : todo)
    )
  };

  return (
    <div>
      <h1>To-Do List</h1>
      {todos.map((todo) => (
        <ToDoListItems key={todo.id} todo={todo} onChange={() => handleCheckboxChange(todo.id)}/>
      ))}
    </div>
  );
}

export default App;
