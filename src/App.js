import TodoItem from './components/TodoItem/TodoItem';
import './App.css';
import Todo from './models/Todo';
import React, {useState} from "react";
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";

function App() {
  const [todos, setTodos] = useState([
    new Todo(1, 'Learn React', 'aslkdjflk;asddjfkl;adsdjflk;;jasdkl;ffjsadlkfjasdl;kjfasdja;sfkasfasdfkjasdhfkjlashjfdklahsdasdl;fk components and props askdlfjkasld;jfl;kasd', '2025-02-01', 'Study'),
    new Todo(2, 'Build a Todo App', 'Practice React fundamentals', '2025-02-10', 'Work'),
  ]);
  const [filter, setFilter] = React.useState('all');
  const [editTodo, setEditTodo] = useState(null);

  const [masterChecked, setMasterChecked] = useState(false);


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

  const handleSetEditTodo = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    if (findTodo) {
      setEditTodo(findTodo);
    } else {
      setEditTodo(null);
    }
  }

  const handleSummitAddTodo = (title,description,deadline,category) => {
    const count = todos.length;
    const newTodo = new Todo(count + 1, title,description,deadline,category);
    setTodos((prevState) => [...prevState, newTodo]);
  }

  const handleSummitEditTodo = (todo) => {
    setTodos((prevTodos) => prevTodos.map((t) => (t.id === todo.id) ? todo : t))
    setEditTodo(null);
  }


  // ✅ 필터링된 리스트 동적 계산
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.checked;
    if (filter === "incomplete") return !todo.checked;
    if (filter === "past-due") return new Date(todo.deadline) < new Date();
    return true; // all
  });

  return (
    <div className="app">
      <div className="todos">
        <h1>To-Do List</h1>
        <TodoFilter filter={filter} setFilter={setFilter} />
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id}
                    todo={todo}
                    onChange={() => handleCheckboxChange(todo.id)}
                    onEdit={() => handleSetEditTodo(todo.id)}
                    onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </div>
      <div className="app-todo-form">
        <h1>{!editTodo ? "Create New To-Do" : "Edit To-Do"}</h1>
        <TodoForm onEdit={handleSummitEditTodo}
                  onAdd={handleSummitAddTodo}
                  editTodo={editTodo}/>
      </div>
    </div>
  );
}

export default App;
