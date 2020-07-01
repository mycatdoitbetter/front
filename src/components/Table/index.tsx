import React, { useState, Dispatch, useEffect, FC } from 'react';
import './styles.css';
import { FiEdit3, FiTrash2, FiFrown } from 'react-icons/fi';
import api from '../../services/api';
interface IContact {
  id?: number;
  first: string;
  last: string;
  email: string;
  phone: number;
  hobby: string;
}

const Table: FC<{ handleToogleModal: Dispatch<IContact> }> = ({
  handleToogleModal,
}) => {
  const [contacts, setContacts] = useState<IContact[]>([]);

  async function removeContact(id: any, name: String) {
    if (window.confirm(`Você realmente deseja excluir ${name}?`)) {
      await api.delete(`contacts/${id}`);
      window.location.reload(false);
    }
  }
  async function getContacts() {
    try {
      const response = await api.get<IContact[]>('/contacts');
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
      {contacts.length > 0 ? (
        contacts.map((contact, index) => (
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
                onClick={() => removeContact(contact.id, contact.first)}
              >
                <FiTrash2 size={25} />
              </div>
            </div>
          </li>
        ))
      ) : (
        <li>
          <div id="field">
            {/* <FiFrown size={30} /> */}
            <h3 className="value">Sem contatos cadastrados</h3>
          </div>
        </li>
      )}
    </ul>
  );
};

export default Table;
