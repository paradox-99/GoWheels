# GoWheels - Car Rental System

## Project Overview

GoWheels is a comprehensive car rental system designed to simplify the process of renting vehicles for users while providing powerful management tools for administrators, agencies, and drivers. The platform includes user-friendly features for booking, cancellations, real-time car availability, secure payments, and more.

---

## Live Demo

Experience the live version of the GoWheels car rental system here:

[https://gowheels-99.web.app/](https://gowheels-99.web.app/)

---

## Features

### User Features:

- **Car Listings & Management**: View available cars with details like model, price, and specifications.
- **Real-time Vehicle Availability**: Check current availability based on bookings and returns.
- **Booking & Cancellation**: Seamless process for booking and canceling car reservations.
- **Rating & Review System**: Users can provide feedback on cars and services.
- **Notifications**: Receive alerts for booking confirmations, cancellations, and reminders via email.
- **Secure Payments**: Online payment integration with trusted gateways.

### Driver Features:

- **Registration with Verification**: Drivers must register and await admin approval to be added to the system.
- **Driver's License Verification**: Upload and verify license and identity information.
- **Personal Details Management**: Maintain accurate personal and contact information.

### Admin Features:

- **Vehicle Maintenance Tracking**: Monitor and schedule vehicle maintenance.
- **Return and Damage Handling**: Manage returns, assess damages, and process charges.
- **Driver Management**: Approve drivers, verify their credentials, and monitor performance.

### General Features:

- **Support & Help**: FAQs, live chat, and phone support for customer assistance.
- **Security Features**: Ensure safety with driver's license verification and insurance details.

---

## Technologies Used

- **Frontend**: React.js, Tailwind CSS, Material UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase
- **Payment Gateway**: SSLCommerz
- **Real-time Communication**: Socket.io

---

## Roles and Functionalities

### User Role:

- View available cars and their details.
- Book or cancel car reservations.
- Provide ratings and reviews for cars and services.
- Receive notifications for booking updates.

### Driver Role:

- Register with valid personal and license details.
- Await admin approval to become active in the system.
- Add and update personal information.

### Admin Role:

- Manage car listings, bookings, and cancellations.
- Approve or reject driver registrations.
- Track vehicle maintenance and handle returns.
- Address user and driver issues.

### Agency Role:

- Manage car listings and vehicle availability.
- Track vehicle maintenance schedules and updates.
- Coordinate with drivers to ensure vehicles are ready for bookings.
- Provide customer support for vehicle-related inquiries.

---

## Setup and Installation

1.  **Clone the Repository**:

    ```bash
    git clone https://github.com/mb-masumbillah/GoWheels-client
    cd gowheels
    ```

2.  **Install Dependencies**:

    - **Frontend**:
      ```bash
      cd GoWheels-client
      npm install
      ```
    - **Backend**:
      ```bash
      cd GoWheels_server
      npm install
      ```

3.  **Environment Variables**:

    - `.env` file in `frontend`

      ```
      FIREBASE_APIKEY=your_firebase_api_key
      FIREBASE_AUTHDOMAIN=your_firebase_auth_domain
      FIREBASE_PROJECTID=your_firebase_project_id
      FIREBASE_STORAGEBUCKET=your_firebase_storage_bucket
      FIREBASE_MESSAGINGSENDERID=your_firebase_sender_id
      FIREBASE_APPID=your_firebase_app_id

      VITE_API_URL=http://localhost:3000/api
      ```

    - `.env` file in `frontend`

    ```
    db_Name = mongodb_name
    db_Password = mongodb_password
    ACCESS_TOKEN_SECRET = secret_key
    SSL_Store_ID = ssl_store_id
    SSL_Store_Password = ssl_store_password
    ```

- **Frontend**:
  ```bash
   npm run dev
  ```
- **Backend**:
  ```bash
  nodemon index.js
  ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

---

## Usage Instructions

## Usage Instructions

1. **For Users**:

   - Sign up or log in to browse available cars.
   - Book a car, provide payment details, and confirm your reservation.
   - Manage your bookings through your dashboard.

2. **For Drivers**:

   - Register with valid credentials and wait for admin approval.
   - Once approved, log in to access driver-specific features.

3. **For Admins**:

   - Use the admin dashboard to manage cars, users, drivers, and bookings.
   - Approve or reject driver registrations.
   - Track vehicle maintenance and handle returns.

4. **For Agencies**:
   - Register as an agency and log in to manage car listings and availability.
   - Track and schedule vehicle maintenance.
   - Coordinate with drivers to ensure vehicles are available and ready for booking.
   - Provide customer support for vehicle-related inquiries.

---

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute as per the license terms.

---

## Contact

For queries or support, please contact us at [masumbillah2062003@gmail.com](masumbillah2062003@gmail.com).
