import React, { useState } from "react";
import AddCompanyForm from "./AddCompanyForm";
import "./Dashboard.css"; // Import the CSS file for styling

const Dashboard = () => {
  const [companies, setCompanies] = useState([]);

  const addCompany = (companyDetails) => {
    setCompanies((prevCompanies) => [...prevCompanies, companyDetails]);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Company Dashboard</h1>
      </header>

      <section className="dashboard-form-section">
        <AddCompanyForm addCompany={addCompany} />
      </section>

      <section className="dashboard-list-section">
        <h2>Companies List</h2>
        <ul className="companies-list">
          {companies.map((company, index) => (
            <li key={index} className="company-card">
              <h3>{company.name}</h3>
              <p><strong>Location:</strong> {company.location}</p>
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a href={company.linkedIn} target="_blank" rel="noopener noreferrer">
                  {company.linkedIn}
                </a>
              </p>
              <p><strong>Emails:</strong> {company.emails.join(", ")}</p>
              <p><strong>Phone:</strong> {company.phoneNumbers.join(", ")}</p>
              <p><strong>Comments:</strong> {company.comments}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
