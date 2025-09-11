import React from "react";
import './Contact.css';

const Contact = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <li className="contact-item">
      <h2 className="contact-name">{contact.name}</h2>
      <h3 className="contact-number">{contact.number}</h3>
      <button className="delete-btn" onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;
