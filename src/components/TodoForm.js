import React from 'react';

const TodoForm = ({onSummited}) => {
  return (
    <form onSubmit={onSummited}>
      <div>
        <label htmlFor="title" className="form-label">Title: </label>
        <input id="title" type="text" defaultValue=""/>
      </div>
      <div>
        <label htmlFor="description" className="form-label">Discription: </label>
        <input id="description" type="text" defaultValue=""/>
      </div>
      <div>
        <label htmlFor="deadline" className="form-label">Deadline: </label>
        <input id="deadline" type="date" defaultValue=""/>
      </div>
      <div>
        <label htmlFor="category" className="form-label">Category: </label>
        <input id="category" type="text" defaultValue=""/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;