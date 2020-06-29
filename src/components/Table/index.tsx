import React, { useState } from 'react';
import './styles.css';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';

interface contacts {
  first: String;
  last: String;
  email: String;
  phone: number;
  hobby: String;
}

const Table: React.FC = () => {
  const [contacts, setContacts] = useState<contacts[]>([
    {
      first: 'André',
      last: 'Castelo',
      email: 'andre.castelo@gmail.com',
      phone: 985859696,
      hobby: 'Comer',
    },
  ]);

  function removeContact(phone: number, name: String) {
    if (window.confirm(`Você realmente deseja excluir ${name}?`)) {
      setContacts(contacts.filter((contact) => contact.phone !== phone));
    }
  }

  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <div id="field">
            <span className="label">Nome</span>
            <h3 className="value">{`${contact.first} ${contact.last}`}</h3>
          </div>
          <div id="field">
            <span className="label">Email</span>
            <h3 className="value">{contact.email}</h3>
          </div>
          <div id="field">
            <span className="label">Telefone</span>
            <h3 className="value">{contact.phone}</h3>
          </div>
          <div id="field">
            <span className="label">Hobby</span>
            <h3 className="value">{contact.hobby}</h3>
          </div>
          <div className="buttons">
            <div
              className="edit-icon"
              onClick={() => alert(`edit ${contact.first}`)}
            >
              <FiEdit3 size={25} />
            </div>
            <div
              className="remove-icon"
              onClick={() => {
                removeContact(contact.phone, contact.first);
              }}
            >
              <FiTrash2 size={25} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Table;
