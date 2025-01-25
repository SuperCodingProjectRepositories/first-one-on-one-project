import React from 'react';
import ListItem from "../models/ListItem";
import './ToDoListItems.css'
import CircleCheckbox from "./CircleCheckbox";
import Deadline from "./Deadline";

const ToDoListItems = ({todo,onChange}) => {

  return (
    <div className='todolistItem-container' id={todo.id}>
      <CircleCheckbox checked={todo.checked} onChange={onChange} label={todo.title}/>
      <Deadline deadline={todo.deadline}/>
      <span>{todo.description}</span>
      <span>{todo.category}</span>
    </div>
  );
};

export default ToDoListItems;