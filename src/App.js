// src/App.js
import React from "react";
import AddCompanyForm from "./components/AddCompanyForm"; // Importing the component
import Dashboard from "./components/Dashboard"; // Importing the component

function App() {
  return (
    <div className="App">
      <h1>Welcome to Calendar App</h1>
      <AddCompanyForm /> {/* Render AddCompanyForm component */}
      <Dashboard /> {/* Render Dashboard component */}
    </div>
  );
}

export default App;
