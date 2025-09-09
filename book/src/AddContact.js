import React, { useState } from "react";

const AddContact = ({onSubmit}) => {
  let [inpNameValue, setInpNameValue] = useState("");
  let [inpNumValue, setInpNumValue] = useState("");

  const changeNameValue = (e) => {
    setInpNameValue((inpNameValue = e.target.value));
  };

  const changeNumValue = (e) => {
    setInpNumValue((inpNumValue = e.target.value));
  };

  const onSend = (e) => {
    e.preventDefault()
    onSubmit(inpNameValue, inpNumValue)
  }
  

  return (
    <form onSubmit={onSend}>
      <input
        onChange={changeNameValue}
        value={inpNameValue}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <input
        onChange={changeNumValue}
        value={inpNumValue}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button type="submit">submit</button>
    </form>
  );
};

export default AddContact;
