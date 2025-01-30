import React from 'react';
import './MasterCheckBox.css'

const MasterCheckBox = ({checked, onChange}) => {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="circle-checkbox"></span>
      <span className="checkbox-label">모두 체크</span>
    </label>
  );
};

export default MasterCheckBox;