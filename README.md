# Medify - Medical Center Slot Booking Platform

## Overview
Medify is a React-based frontend of a web application designed to help users find medical centers in various states and cities across the USA and book appointments seamlessly.

## Key Features

### Landing Page
- **Navigation Bar**: Access sections such as Find Doctors, Hospitals, Medicines, etc.
- **Search Section**: Users can select a state and city from dropdown menus, fetching options from an API to list available medical centers.

### Search Results Page
- **Listings View**: Displays available medical centers in the selected location.
- **Booking Option**: Users can book slots for the chosen medical center.

### Booking Interface
- **Detailed Booking Section**: Select a medical center and choose the appointment date and time
- **Appointment Scheduling**: Book appointments up to one week in advance with available time slots.

### My Bookings Page
- **Personalized Bookings**: Displays all user bookings, including the medical center's name, appointment date, and time.

### Responsive Design
- **Full Responsiveness**: Ensures the application works well on various devices and screen sizes.
- **Carousels**: Utilizes the Slick library to implement mandatory carousels.

## API Endpoints
- **Get All States**: `https://meddata-backend.onrender.com/states`
- **Get All Cities of a State**: `https://meddata-backend.onrender.com/cities/:state`
- **Get Medical Centers Based on State and City**: `https://meddata-backend.onrender.com/data?state=<state-name>&city=<city-name>`

## Deployment
The application is deployed on Vercel. [Live Demo](https://medify-coral.vercel.app/)

## Local Setup
1. **Clone the Repository**: `git clone https://github.com/abhishekpatil4/Medify.git && cd Medify`
2. **Install Dependencies**: `npm install`
3. **Start the Application**: `npm run dev`

## Technologies Used
- **React**: Front-end framework
- **Slick**: For implementing carousels
- **Axios**: For API calls
- **LocalStorage**: To persist data
