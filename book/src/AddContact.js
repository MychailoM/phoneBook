import React, { useState } from "react";
import './AddContact.css';

const AddContact = ({ onSubmit }) => {
  let [inpNameValue, setInpNameValue] = useState("");
  let [inpNumValue, setInpNumValue] = useState("");

  const changeNameValue = (e) => {
    setInpNameValue(e.target.value);
  };

  const changeNumValue = (e) => {
    setInpNumValue(e.target.value);
  };

  const onSend = (e) => {
    e.preventDefault();
    onSubmit(inpNameValue, inpNumValue);
    setInpNameValue("");
    setInpNumValue("");
  }

  return (
    <form className="add-contact-form" onSubmit={onSend}>
      <input
        className="input-name"
        onChange={changeNameValue}
        value={inpNameValue}
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
      <input
        className="input-number"
        onChange={changeNumValue}
        value={inpNumValue}
        type="tel"
        name="number"
        placeholder="Phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        required
      />
      <button className="submit-btn" type="submit">Add</button>
    </form>
  );
};

export default AddContact;
