import React from 'react';
import './TodoItem.css'
import CircleCheckbox from "./CircleCheckbox";
import Deadline from "./Deadline";
import Category from "./Category";

const TodoItem = ({todo,onChange,onDelete}) => {

  return (
    <div className='todoItem-wapper'>
      <div className='todoItem-container' id={todo.id}>
        <CircleCheckbox checked={todo.checked} onChange={onChange} label={todo.title}/>
        <Deadline deadline={todo.deadline}/>
        <div className='category-wrapper'>
          <Category category={todo.category}/>
        </div>
        <div className="description-wrapper">
          <span>{todo.description}</span>
        </div>
        <button onClick={onDelete} className='todoItem-button-delete'>X</button>
      </div>
    </div>
  );
};

export default TodoItem;