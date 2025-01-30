import React from 'react';
import './Category.css'
const Category = ({category}) => {
  return (
    <div className='category-container'>
      #{category}
    </div>
  );
};

export default Category;