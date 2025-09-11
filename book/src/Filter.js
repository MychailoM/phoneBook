import { useState } from "react";
import './Filter.css';

const Filter = ({ onFilterChange }) => {
  const onChangeInpValue = (e) => {
    onFilterChange(e.target.value.toLowerCase());
  };

  return (
    <input
      className="filter-input"
      placeholder="Search contacts"
      onChange={onChangeInpValue}
    />
  );
};

export default Filter;
