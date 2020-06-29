import React, { useRef } from 'react';
import './App.css';

import { FiChevronDown } from 'react-icons/fi';
import Table from './components/Table';
const Schedule = () => {
  const scheduleRef = useRef<any>(null);

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
          <Table />
        </div>
      </div>
    </>
  );
};

export default Schedule;
