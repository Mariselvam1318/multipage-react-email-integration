# Multipage React Travel Application with Email Integration

## Overview

The **Multipage React Travel Application** is a React-based web application designed to provide information about travel services. It features multiple pages such as Home, About Us, Services, and Contact Us. The application also integrates Email.js to allow users to send messages directly from the Contact page.

## Features

*   **Home Page**: A welcoming page providing an overview of the travel services.
*   **About Us Page**: Information about the company and its mission.
*   **Services Page**: Details about the various travel services offered.
*   **Contact Us Page**: A form for users to get in touch, integrated with Email.js for sending messages.
*   **Responsive Design**: The application is designed to be responsive and user-friendly on various devices.

## Technologies Used

*   **React**: For building the user interface.
*   **React Router**: For navigating between different pages in the application.
*   **Email.js**: For handling email sending functionality.
*   **Bootstrap**: For styling and responsive design.

## Project Structure

*   `**App.js**`: Main application component, including the Router setup and navigation.
*   `**Home.js**`: Component for the Home page.
*   `**About.js**`: Component for the About Us page.
*   `**Services.js**`: Component for the Services page.
*   `**Contact.js**`: Component for the Contact Us page with email functionality.

## Setup and Installation

1.  **Clone the Repository**

\`\`\`bash
git clone <repository-url>
cd multipage-react-email-integration

1.  **Install Dependencies**
2.  Ensure you have Node.js installed. Run the following command to install the required dependencies:

```bash
npm install
```
1.  **Run the Application**
2.  Start the development server:

```bash
npm start
```
1.  The application will be available at `http://localhost:3000`.

## Email.js Configuration

To enable email functionality on the Contact page, you need to configure Email.js:

1.  **Create an Account**: Sign up at [Email.js](https://www.emailjs.com/).
2.  **Create an Email Service**: Set up your email service and obtain your service ID, template ID, and public key.
3.  **Update Configuration**: Replace `'YOUR SERVICE_ID'`, `'YOUR TEMPLATE_ID'`, and `'YOUR PUBLIC_KEY'` in the `Contact.js` component with your actual service ID, template ID, and public key.

## React Router

The application uses `react-router-dom` for client-side routing:

*   `**BrowserRouter**`: Wraps the entire application to enable routing.
*   `**Routes**` **and** `**Route**`: Define different routes for each page.
*   `**Link**`: Provides navigation links to switch between pages.

## Sample Pages

### Home Page

*   Provides an overview of travel services.
*   Includes a welcoming message and featured images.

### About Us Page

*   Details about the company’s mission and history.

### Services Page

*   Lists the various travel services offered with descriptions.

### Contact Us Page

*   Includes a form for users to send inquiries.
*   Utilizes Email.js for sending email messages.

#
## Additional Resources

*   **React Documentation:** React Docs
*   **React Bootstrap Documentation:** React Bootstrap
*   **Email.js Documentation:** Email.js
*   **React Router Documentation:** [React Router](https://reactrouter.com/)

##