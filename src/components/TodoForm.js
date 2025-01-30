import React, {useEffect, useState} from 'react';
import './TodoForm.css'
import Todo from "../models/Todo";

const TodoForm = ({onEdit,onAdd, editTodo}) => {
  // ✅ 상태: editTodo가 있으면 초기값 설정
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDescription(editTodo.description);
      setDeadline(editTodo.deadline);
      setCategory(editTodo.category);
    } else {
      setTitle("");
      setDescription("");
      setDeadline("");
      setCategory("");
    }
  }, [editTodo]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editTodo) {
      editTodo.title = title;
      editTodo.description = description;
      editTodo.deadline = deadline;
      editTodo.category = category;
      onEdit(editTodo);
    } else {
      onAdd(title, description, deadline,category);
    }

    setTitle("");
    setDescription("");
    setDeadline("");
    setCategory("");
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor="title" className="form-label">Title: </label>
        <input id="title" type="textarea"
               value={title}
               onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className='form-group'>
        <label htmlFor="deadline" className="form-label">Deadline: </label>
        <input id="deadline" type="date"
               value={deadline}
               onChange={(e) => setDeadline(e.target.value)}/>
      </div>
      <div className='form-group'>
        <label htmlFor="category" className="form-label">Category: </label>
        <input id="category" type="textarea"
               value={category}
               onChange={(e) => setCategory(e.target.value)}/>
      </div>
      <div className='form-group'>
        <label htmlFor="description" className="form-label">Discription: </label>
        <textarea id="description"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}/>
      </div>
      <button className='submit-button' type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;