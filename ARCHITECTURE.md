# Task Manager Architecture

## Overview

Task Manager is a full-stack web application that allows users to manage their tasks securely using JWT authentication.

The application follows a client-server architecture:

Frontend (React + Vite)
↓
REST API (Node.js + Express)
↓
MongoDB Database

---

## Frontend Architecture

### Technologies

* React
* Vite
* Zustand
* React Router DOM
* Axios
* React Hook Form
* Tailwind CSS
* Recharts

### Folder Structure

src/

components/
├── common/
├── layout/
├── dashboard/
└── tasks/

pages/
├── Login.jsx
├── Register.jsx
├── Dashboard.jsx
└── Tasks.jsx

services/
├── authService.js
├── taskService.js
└── dashboardService.js

store/
└── authStore.js

routes/
└── ProtectedRoute.jsx

api/
└── axios.js

---

## Backend Architecture

### Technologies

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs

### Folder Structure

src/

controllers/
├── authController.js
├── taskController.js
└── dashboardController.js

middleware/
├── authMiddleware.js
├── errorHandler.js
└── validateRequest.js

models/
├── User.js
└── Task.js

routes/
├── authRoutes.js
├── taskRoutes.js
└── dashboardRoutes.js

validators/
└── authValidator.js

utils/
└── generateToken.js

---

## Authentication Flow

1. User registers using email and password.
2. Password is hashed using bcrypt.
3. User logs in.
4. JWT token is generated.
5. Token is stored in localStorage.
6. Protected APIs validate the token.
7. User information is attached to req.user.

Flow:

User
↓
Login
↓
JWT Token
↓
Protected Route
↓
Authorized Request

---

## Task Management Flow

Create Task
↓
Task Controller
↓
MongoDB
↓
Response

Update Task
↓
Task Controller
↓
MongoDB
↓
Updated Task Returned

Delete Task
↓
Task Controller
↓
MongoDB
↓
Success Response

---

## Dashboard Flow

Dashboard Controller calculates:

* Total Tasks
* To Do Tasks
* In Progress Tasks
* Completed Tasks
* Overdue Tasks
* Priority Statistics
* Recent Tasks

The data is returned to the frontend and displayed using cards and charts.

---

## Database Design

### User Collection

User

* _id
* name
* email
* password
* createdAt
* updatedAt

### Task Collection

Task

* _id
* title
* description
* status
* priority
* dueDate
* userId
* createdAt
* updatedAt

Relationship:

One User
↓
Many Tasks

---

## Performance Optimizations

### React

* React.memo
* useCallback
* Optimistic UI Updates

### MongoDB

Indexes:

* userId
* status
* priority
* dueDate
* createdAt

---

## Security

* JWT Authentication
* bcrypt Password Hashing
* Helmet Middleware
* Protected Routes
* Input Validation
* Error Handling Middleware

---

## Scalability

The project is structured using separate layers:

* Routes
* Controllers
* Middleware
* Models
* Services

This architecture makes it easy to add:

* Teams
* Task Categories
* Notifications
* File Uploads
* Real-Time Updates

without major refactoring.
