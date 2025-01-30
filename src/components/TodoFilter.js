import React from 'react';
import './TodoFilter.css';

const TodoFilter = ({filter, setFilter}) => {


  return (
    <div className="todo-filter">
      <button onClick={() => setFilter('all')}
              className={filter === 'all' ? 'active' : ''}>All
      </button>
      <button onClick={() => setFilter('completed')}
              className={filter === 'completed' ? 'active' : ''}>Completed
      </button>
      <button onClick={() => setFilter('incomplete')}
              className={filter === 'incomplete' ? 'active' : ''}>Incomplete
      </button>
      {/*<button onClick={() => handleFilterChange('category')}*/}
      {/*        className={filter === 'category' ? 'active' : ''}>Category*/}
      {/*</button>*/}
      <button onClick={() => setFilter('past-due')}
              className={filter === 'past-due' ? 'active' : ''}>Past-due
      </button>
    </div>
  );
};

export default TodoFilter;