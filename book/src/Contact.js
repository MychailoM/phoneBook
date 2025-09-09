import React from "react";

const Contact = ({contact}) => {

    return(
        <li key={contact.id}>
            <h2>{contact.name}</h2>
            <h3>{contact.number}</h3>
        </li>
    )
}

export default Contact;