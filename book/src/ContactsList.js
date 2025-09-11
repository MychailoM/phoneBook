import React from "react";
import Contact from "./Contact";
import './ContactsList.css';

const ContactsList = ({ contacts, onDelete }) => (
  <ul className="contacts-list">
    {contacts.map(contact => (
      <Contact key={contact.id} contact={contact} onDelete={onDelete} />
    ))}
  </ul>
);

export default ContactsList;
