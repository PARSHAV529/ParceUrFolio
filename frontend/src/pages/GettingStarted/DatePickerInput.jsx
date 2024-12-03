import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Ensure this is imported

const DatePickerInput = ({ selected, handleChange }) => {
  return (
    <DatePicker
      selected={selected ? new Date(selected) : null} // Ensure null is passed if no value
      onChange={handleChange}
      dateFormat="yyyy-MM-dd"
      placeholderText="Select a date"
      isClearable
    />
  );
};

export default DatePickerInput;
