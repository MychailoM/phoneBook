import { useState, useEffect } from "react";
import ContactsList from "./ContactsList";
import AddContact from "./AddContact";
import Filter from "./Filter";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  let [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  let [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = (inpNameValue, inpNumValue) => {
    const isExist = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === inpNameValue.toLowerCase() ||
        contact.number === inpNumValue
    );

    if (isExist) {
      alert(`Неможливо додати: контакт з таким ім'ям або номером вже існує.`);
      return;
    }

    let contactObject = {
      id: nanoid(),
      name: inpNameValue,
      number: inpNumValue,
    };

    setContacts([...contacts, contactObject]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const onFilterChange = (inpValue) => {
    setFilterValue(inpValue);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <div className="App">
      <div className="control-box">
        <AddContact onSubmit={onSubmit} />
        <Filter onFilterChange={onFilterChange} />
      </div>
      <ContactsList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
