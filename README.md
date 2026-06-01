# Task Manager

A full-stack Task Management application built with React, Node.js, Express, MongoDB, and JWT Authentication.

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Logout Functionality

### Task Management

* Create Tasks
* View Tasks
* Update Tasks
* Delete Tasks
* Confirmation Before Delete

### Task Organization

* Search Tasks
* Filter by Status
* Filter by Priority
* Sort by Due Date
* Sort by Created Date

### Dashboard

* Total Tasks
* To Do Tasks
* In Progress Tasks
* Completed Tasks
* Overdue Tasks
* Status Distribution Pie Chart
* Priority Distribution Bar Chart
* Recent Tasks Widget

### UI Features

* Responsive Design
* Mobile Sidebar Navigation
* Client-side Form Validation
* Toast Notifications
* Optimized Rendering using React.memo and useCallback

---

## Tech Stack

### Frontend

* React
* Vite
* React Router DOM
* Zustand
* React Hook Form
* Axios
* Tailwind CSS
* Recharts
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* Helmet
* Morgan
* CORS

---

## Project Structure

Backend

src/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── validators/

Frontend

src/
├── components/
├── pages/
├── services/
├── store/
├── routes/
├── api/

---

## Installation

### Clone Repository

git clone <repository-url>

### Backend Setup

cd Backend

npm install

Create .env file:

PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/task-manager-db

JWT_SECRET=your_secret_key

Start Backend

npm run dev

### Frontend Setup

cd Frontend

npm install

Create .env file:

VITE_API_URL=http://localhost:5000/api

Start Frontend

npm run dev

---

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

GET /api/auth/me

### Tasks

GET /api/tasks

POST /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id

### Dashboard

GET /api/dashboard

---

## Performance Optimizations

* React.memo for task rows
* useCallback for event handlers
* Indexed MongoDB fields
* Optimized state updates without unnecessary API refetches

---

## Security

* JWT Authentication
* Password Hashing using bcrypt
* Helmet Security Middleware
* Protected Routes
* Input Validation

---

## Future Enhancements

* Email Notifications
* Task Categories
* Team Collaboration
* Drag and Drop Task Board
* Dark Mode

---

## Author

Saicharan
