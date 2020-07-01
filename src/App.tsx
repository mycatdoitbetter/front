import React, { useRef, useState } from 'react';
import './App.css';
import api from './services/api';
import { FiChevronDown, FiX, FiPlus } from 'react-icons/fi';
import Table from './components/Table';

interface IContact {
  first: string;
  last: string;
  email: string;
  phone: number;
  hobby: string;
}

const Schedule: React.FC = () => {
  const scheduleRef = useRef<any>(null);

  const [toogleEditModal, setToogleEditModal] = useState<Boolean>(false);
  const [toogleRecordModal, setToogleRecordModal] = useState<Boolean>(false);
  const [contact, setContact] = useState<IContact>();

  function handleToogleModal(contact: IContact) {
    setToogleEditModal(true);
    setContact(contact);
  }

  function scrollToBottom() {
    scheduleRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      {/* Home Screen */}
      <div className="home-container">
        <h1 className="title">Enjoy your own Master Schedule!</h1>
        <h2 className="description">
          Here you can manage your contacts and get a overview of you contacts
          schedule!
        </h2>
        <button id="go-to-bottom" onClick={scrollToBottom}>
          <FiChevronDown size={40} color="#f4f6f8" />
        </button>
      </div>

      {/* Contacts Screen  */}
      <div className="schedule-container" ref={scheduleRef}>
        <h1 className="title">Contacts</h1>
        <button
          className="add-button"
          onClick={() => setToogleRecordModal(true)}
        >
          <span id="hide">Add a Contact!</span>
          <FiPlus size={30} />
        </button>
        <div className="table">
          <Table handleToogleModal={handleToogleModal} />
        </div>

        {/** Modal Edit */}
        <div id="modal" className={!toogleEditModal ? 'hide' : 'show'}>
          <div className="background">
            <div className="content">
              <div className="header">
                <h1>Edit Contact</h1>
                <p id="x" onClick={() => setToogleEditModal(false)}>
                  <FiX size={30} />
                </p>
              </div>
              <form action="submit" className="form">
                <label htmlFor="first">Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="first"
                  defaultValue={contact?.first}
                />
                <label htmlFor="last">Last</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="last"
                  defaultValue={contact?.last}
                />

                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  defaultValue={contact?.phone}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  defaultValue={contact?.email}
                />
                <label htmlFor="hooby">Hooby</label>
                <input
                  type="text"
                  placeholder="hooby"
                  name="hobby"
                  defaultValue={contact?.hobby}
                />
                <button type="submit">Edit!</button>
              </form>
            </div>
          </div>
        </div>

        {/** Modal Record Contact */}
        <div id="modal" className={!toogleRecordModal ? 'hide' : 'show'}>
          <div className="background">
            <div className="content">
              <div className="header">
                <h1>Add a New Contact!</h1>
                <p id="x" onClick={() => setToogleRecordModal(false)}>
                  <FiX size={30} />
                </p>
              </div>
              <form action="submit" className="form">
                <label htmlFor="first">Name</label>
                <input type="text" placeholder="First Name" name="first" />
                <label htmlFor="last">Last</label>
                <input type="text" placeholder="Last Name" name="last" />
                <label htmlFor="phone">Phone</label>
                <input type="text" placeholder="Phone" name="phone" />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" name="email" />
                <label htmlFor="hooby">Hooby</label>
                <input type="text" placeholder="hooby" name="hobby" />
                <button type="submit">Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
