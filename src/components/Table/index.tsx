import React, { useState, Dispatch, useEffect, FC } from 'react';
import './styles.css';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';
interface IContact {
  first: string;
  last: string;
  email: string;
  phone: number;
  hobby: string;
}

const Table: FC<{ handleToogleModal: Dispatch<IContact> }> = ({
  handleToogleModal,
}) => {
  const [contacts, setContacts] = useState<IContact[]>([
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
  async function getContacts() {
    try {
      const response = await api.get('/contacts');
      setContacts(response.data);
    } catch (error) {
      console.log({ error });
    }
  }
  useEffect(() => {
    getContacts();
  }, []);

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
              onClick={() => handleToogleModal(contact)}
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
