import React from 'react';
import './Deadline.css'
const Deadline = ({deadline}) => {
  return (
    <div className="deadline-container">
      <img src={`${process.env.PUBLIC_URL}/svg/calender.svg`} alt="deadline"/>
      <span>기한 : {new Date(deadline).toDateString()}</span>
    </div>
  );
};

export default Deadline;