# Referral Builder Application

A web-based application built with **React**, **Redux Toolkit**, and **Material-UI** that allows users to create, manage, and view referrals. The application utilizes **Axios** for REST API calls and provides a responsive, user-friendly interface.

---

## Table of Contents

1. [Features](#features)  
2. [Technologies Used](#technologies-used)  
3. [Installation](#installation)  
4. [Usage](#usage)  
5. [API Endpoints](#api-endpoints)  
6. [Screenshots](#screenshots)  
7. [Contributing](#contributing)  
8. [License](#license)

---

## Features

- Dynamic referral form with real-time validation.
- Mobile-first, responsive design using Material-UI.
- Redux Toolkit-powered state management for predictable behavior.
- Integration with REST APIs using Axios.
- Seamless data fetching and creation of referrals.

---

## Technologies Used

- **Frontend**: React, Material-UI  
- **State Management**: Redux Toolkit  
- **HTTP Client**: Axios  
- **Backend**: [Insert your backend technology here, e.g., Node.js, Express]  
- **Styling**: Material-UI Theme  

---

## Installation

### Prerequisites

- **Node.js** (v14 or higher)  
- **npm** or **yarn**

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/referral-builder.git
   cd referral-builder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:  
   Create a `.env` file in the root directory and define the API base URL:
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   ```

4. Start the backend server:
   ```bash
   npm run server
   ```

5. Start the web application server:
   ```bash
   npm run dev
   ```

---

## Usage

1. Open the application in your browser at `http://localhost:5173`.
2. Fill out the form fields with personal and address details.
3. Click **Create Referral** to submit the form.
4. View the list of referrals on the dashboard.

---

## API Endpoints

### Base URL: `http://localhost:5000`

| Endpoint              | Method | Description                     |
|-----------------------|--------|---------------------------------|
| `/referrals`          | GET    | Fetch all referrals             |
| `/referrals`          | POST   | Add a new referral              |
| `/referrals/:id`      | DELETE | Delete a referral by ID         |
| `/referrals/:id`      | PUT    | Update a referral by ID         |

---

## Screenshots

### Referral Form
![Referral Form Screenshot](./assets/form.png)

### Referral Table
![Referral Table Screenshot](./assets/table.png)

---

## Contributing

Contributions are always welcome! To get started:

1. Fork the repository.
2. Create a feature branch:  
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:  
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request for review.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

### Author

Developed by [Ronald Allan Patawaran](https://github.com/ronaldallanpatawaran).
