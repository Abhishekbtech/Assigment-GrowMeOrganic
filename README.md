# React Internship Assignment

## Overview

This project is a React application created as part of an internship assignment. The application is built using TypeScript and Vite, and it implements various functionalities using Material-UI (MUI). The application includes a user form to collect information, displays JSON data in a table, and features a collapsible list of departments and sub-departments.

## Features

1. **User Form**: Collects user information (name, phone number, email) and saves it to local storage.
2. **Data Table**: Fetches JSON data from an API and displays it in a table using MUI DataGrid.
3. **Collapsible Department List**: Displays a list of departments and sub-departments that can be expanded and collapsed. Users can select departments and sub-departments.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript.
- **Vite**: Next generation front-end tooling.
- **Material-UI (MUI)**: React components for faster and easier web development.
- **React Router**: Declarative routing for React.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/apple-music-clone.git
    ```
2. Navigate to the project directory:
    ```sh
    cd my-react-app
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm run dev
    ```
5. Open your browser and navigate to 'http://localhost:5173' to see the app.

## Deploy on Vercel

Deployment link of my project 'https://assigment-grow-me-organic-abhishek-chuahans-projects.vercel.app/'

## Features
**User Form**
- Allows users to input their name, phone number, and email.
- Submits the form to save details in local storage.
- Upon successful submission, users are routed to the second page.

**Data Table**
- Fetches data from an API and displays it in a table.
- Implemented using the MUI DataGrid component for efficient data display.

**Collapsible Department List**
- Displays departments and sub-departments.
- Users can expand/collapse sub-departments using icons.
- Allows selection/deselection of departments and sub-departments.

**Dependencies**
- @mui/material: Material-UI components.
- @emotion/react, @emotion/styled: Emotion library for styling.
- @mui/icons-material: Material-UI icons.
- @mui/x-data-grid: DataGrid component for displaying tables.
- react-router-dom: Routing library for React.
- axios: Promise-based HTTP client for the browser and Node.js.