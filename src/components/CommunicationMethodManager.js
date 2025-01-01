// src/components/CommunicationMethodManager.js
import React, { useState } from "react";

const CommunicationMethodManager = () => {
  const [methods, setMethods] = useState([
    { name: "LinkedIn Post", description: "Post on LinkedIn", sequence: 1, mandatory: true },
    { name: "LinkedIn Message", description: "Send a LinkedIn message", sequence: 2, mandatory: false },
    // Add other methods as needed
  ]);

  return (
    <div>
      <h3>Communication Methods</h3>
      <ul>
        {methods.map((method, index) => (
          <li key={index}>
            {method.name} - {method.description} (Sequence: {method.sequence}) -{" "}
            {method.mandatory ? "Mandatory" : "Optional"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationMethodManager;
