import './App.css';
import TodoItem from './components/TodoItem/TodoItem';
import Todo from './models/Todo';
import {useState} from "react";
import TodoForm from "./components/TodoForm";

function App() {
  // ToDoList 클래스 인스턴스 생성
  const [todos, setTodos] = useState([
    new Todo(1, 'Learn React', 'aslkdjflk;asddjfkl;adsdjflk;;jasdkl;ffjsadlkfjasdl;kjfasdja;sfkasfasdfkjasdhfkjlashjfdklahsdasdl;fk components and props askdlfjkasld;jfl;kasd', '2025-02-01', 'Study'),
    new Todo(2, 'Build a Todo App', 'Practice React fundamentals', '2025-02-10', 'Work'),
  ]);

  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => todo.id === id ? {...todo, checked: !todo.checked} : todo)
    )
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    })
  }

  const summitHanddler = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const deadline = event.target.deadline.value;
    const category = event.target.category.value;
    const count = todos.length;

    const newTodo = new Todo(count + 1, title,description,deadline,category);

    setTodos((prevState) => [...prevState, newTodo]);

    event.target.reset();
  }

  return (
    <div>
      <h1>To-Do List</h1>
      {todos.map((todo) => (
        <TodoItem key={todo.id}
              todo={todo}
              onChange={() => handleCheckboxChange(todo.id)}
              onDelete={() => handleDelete(todo.id)}
        />
      ))}
      <TodoForm onSummited = {summitHanddler}/>
    </div>
  );
}

export default App;
