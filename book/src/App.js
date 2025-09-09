import { useState } from 'react';
import ContactsList from './ContactsList';
import AddContact from './AddContact';
import './App.css';

function App() {
  let [contacts, setContacts] = useState([
   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
 ]);

 let [contact, setContact] = useState({
  name: '',
  number: '',
 })

 const onSubmit = (inpNameValue, inpNumValue) => {
  let contactObject = {
    name: inpNameValue,
    number: inpNumValue
  }

  setContact(contact = contactObject)
  setContacts(contacts = contacts.push(contact))
 }

  return (
    <div className="App">
      <ContactsList contacts={contacts}/>
      <AddContact onSubmit={onSubmit} />
    </div>
  );
}

export default App;
