// api.js (Frontend API calls to backend)
const API_URL = "http://localhost:5000/api"; // Assuming the backend runs on port 5000

export const getCompanies = async () => {
  const response = await fetch(`${API_URL}/companies`);
  const data = await response.json();
  return data;
};

export const addCompany = async (companyData) => {
  const response = await fetch(`${API_URL}/companies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(companyData),
  });
  const data = await response.json();
  return data;
};
