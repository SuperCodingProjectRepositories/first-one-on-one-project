import React from 'react';
import './CircleCheckbox.css'; // 위 CSS를 여기에 저장

const CircleCheckbox = ({checked, onChange,label}) => {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="circle-checkbox"></span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};

export default CircleCheckbox;