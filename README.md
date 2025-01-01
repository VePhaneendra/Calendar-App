# Calendar Application 


React-based Calendar Application that enables us to efficiently track communication with companies, ensuring follow-ups are timely and consistent. This tool will provide a centralized platform to log past interactions, plan future communications, and manage the frequency of engagement based on predefined schedules
## Available Scripts

In the project directory, you can run:
1. Clone the Repository
2.     git clone https://github.com/VePhaneendra/Calendar-App.git
3. Go through project Directory
4.      cd calendar-app
5. Install Dependencies
6.      npm install
7.  Run the Application
8.     npm start
9. Web application open in the system default web browser at localhost : 3000.

   
### File architecture
    dashboard-management/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── AddCompanyForm.js
    │   │   ├── Dashboard.js
    │   │   ├── AddCompany.css
    │   │   ├── Dashboard.css
    │   ├── App.js
    │   ├── index.js
    │   ├── App.css
    │   ├── utils/
    │       └── api.js (for future API integration)
    ├── README.md
    ├── package.json




### Technologies Used

FRONTEND
 -React.js
 -JavaScript
 -CSS Modules
 -HTML5
 for Styling the web pages i have used the css flexbox for the layout and alignment
 
A methodical strategy that prioritized clean code, modular architecture, and an engaging user experience was used to build the application. Every feature underwent extensive testing to guarantee seamless operation, and innovative design decisions were made to improve use and aesthetics.

### `Woking `

Adding a New Company

 User Interaction:
        On the dashboard, the user sees an "Add New Company" section with a form.
        The form allows the user to input company details, such as:
            Company Name: The name of the company.
            Company Address: The address of the company.
            Contact Information: Details like email or phone number.

Form Submission:

   When the user clicks the "Add Company" button:
   The form inputs are validated to ensure all required fields are filled correctly.
   The details are sent to the parent component using the addCompany function.

Updating the State:

   The addCompany function is responsible for updating the list of companies stored in the application’s state.
   This ensures that the new company is added dynamically without reloading the page. 

2. Displaying the Companies

    Dynamic Rendering:
        After adding a new company, the updated list of companies is rendered in the Dashboard section.
        Each company’s details (name, address, and contact information) are displayed in a visually appealing card format.

    Color-Coded Highlights:
        The dashboard uses color-coded cards to differentiate companies or emphasize key details, improving visual clarity.

