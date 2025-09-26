import { useState } from "react";
import ContactList from "./components/ContactList";

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Juan Perez", email: "juan@example.com", phone: "123-456-7890" },
    { id: 2, name: "María García", email: "maria@example.com", phone: "987-654-3210" },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const addContact = (contact) => {
    const nextId = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;

    setContacts([...contacts, { id: nextId, ...contact }]);
    setIsOpen(false);
  };
  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div className="container">
      <h1>Lista de Contactos</h1>

      <ContactList contacts={contacts} onDelete={deleteContact} />

      <button onClick={() => setIsOpen(true)} className="addContactBtn">
        +
      </button>

      {isOpen && <Modal onClose={() => setIsOpen(false)} onAdd={addContact} />}
    </div>
  );
}
