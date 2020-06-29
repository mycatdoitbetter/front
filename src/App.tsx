import React, { useRef, useState, MutableRefObject } from 'react';
import './App.css';

import { FiChevronDown, FiX } from 'react-icons/fi';
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

  const [toogleModal, setToogleModal] = useState<Boolean>(false);
  const [contact, setContact] = useState<IContact>();

  function handleToogleModal(contact: IContact) {
    setToogleModal(true);
    setContact(contact);
  }

  function scrollToBottom() {
    scheduleRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      {/* home */}

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

      {/* second */}
      <div className="schedule-container" ref={scheduleRef}>
        <h1 className="title">Contacts</h1>
        <div className="table">
          <Table handleToogleModal={handleToogleModal} />
        </div>
        {/** Modal */}
        <div id="modal" className={!toogleModal ? 'hide' : 'show'}>
          <div className="background">
            <div className="content">
              <div className="header">
                <h1>Edit Contact</h1>
                <p id="x" onClick={() => setToogleModal(false)}>
                  <FiX size={30} />
                </p>
              </div>
              <form action="submit">
                <label htmlFor="search">Cidade</label>
                <div className="search field">
                  <input
                    type="text"
                    placeholder="Nome"
                    // name="search"
                    value={contact?.first}
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
