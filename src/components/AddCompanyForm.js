import React, { useState } from "react";
import "./AddCompanyForm.css"; // Import the CSS file for styling

const AddCompanyForm = ({ addCompany }) => {
  const [company, setCompany] = useState({
    name: "",
    location: "",
    linkedIn: "",
    emails: [],
    phoneNumbers: [],
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((prevCompany) => ({
      ...prevCompany,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof addCompany === "function") {
      addCompany(company);
    }
    setCompany({
      name: "",
      location: "",
      linkedIn: "",
      emails: [],
      phoneNumbers: [],
      comments: "",
    });
  };

  return (
    <form className="add-company-form" onSubmit={handleSubmit}>
      <h2>Add New Company</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={company.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={company.location}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>LinkedIn:</label>
        <input
          type="text"
          name="linkedIn"
          value={company.linkedIn}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Emails (comma separated):</label>
        <input
          type="text"
          name="emails"
          value={company.emails.join(", ")}
          onChange={(e) =>
            setCompany({ ...company, emails: e.target.value.split(",") })
          }
          required
        />
      </div>
      <div className="form-group">
        <label>Phone Numbers (comma separated):</label>
        <input
          type="text"
          name="phoneNumbers"
          value={company.phoneNumbers.join(", ")}
          onChange={(e) =>
            setCompany({ ...company, phoneNumbers: e.target.value.split(",") })
          }
          required
        />
      </div>
      <div className="form-group">
        <label>Comments:</label>
        <textarea
          name="comments"
          value={company.comments}
          onChange={handleChange}
        />
      </div>
      <button className="add-company-button" type="submit">
        Add Company
      </button>
    </form>
  );
};

export default AddCompanyForm;
