// src/components/CommunicationActionModal.js
import React, { useState } from "react";
import axios from "axios";

const CommunicationActionModal = ({ company, closeModal }) => {
  const [communication, setCommunication] = useState({
    type: "",
    date: "",
    notes: "",
  });

  const handleSubmit = async () => {
    await axios.post(`/api/companies/${company.id}/communications`, communication);
    closeModal();
  };

  return (
    <div>
      <h3>Log Communication</h3>
      <select
        name="type"
        value={communication.type}
        onChange={(e) => setCommunication({ ...communication, type: e.target.value })}
      >
        <option value="LinkedIn Post">LinkedIn Post</option>
        <option value="Email">Email</option>
        <option value="Phone Call">Phone Call</option>
        {/* Add more communication types */}
      </select>
      <input
        type="date"
        name="date"
        value={communication.date}
        onChange={(e) => setCommunication({ ...communication, date: e.target.value })}
      />
      <textarea
        name="notes"
        value={communication.notes}
        onChange={(e) => setCommunication({ ...communication, notes: e.target.value })}
        placeholder="Add notes"
      />
      <button onClick={handleSubmit}>Log Communication</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default CommunicationActionModal;
