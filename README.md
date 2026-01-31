# Student Management System (Full Stack CRUD Application)

A full-stack **Student Management System** built using **React**, **Spring Boot**, and **Supabase (PostgreSQL)**.  
This project demonstrates clean RESTful API design, proper backend layering, and a minimal yet modern frontend UI.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- JavaScript
- Custom CSS (No UI libraries)

### Backend
- Java Spring Boot
- Spring Data JPA
- Hibernate
- REST APIs

### Database
- Supabase (PostgreSQL – Cloud)

### Tools
- VS Code
- Maven
- Git & GitHub
- Postman

---

## 🏗️ System Architecture

```
React Frontend
      ↓
Spring Boot REST API
      ↓
Supabase PostgreSQL Database
```

> The frontend communicates only with the backend APIs.  
> All database operations are handled by Spring Boot using JPA.

---

## ✨ Features

- Create a student
- View all students
- Update student details
- Delete a student
- Clean and centered UI
- Cloud-hosted database (Supabase)

---

## 📂 Project Structure

```
student-management-system/
├── backend/
│   ├── src/main/java/com/example/demo
│   │   ├── controller
│   │   ├── service
│   │   ├── repository
│   │   └── model
│   └── src/main/resources/application.properties
│
├── frontend/
│   ├── src/components
│   ├── src/services
│   └── src/App.jsx
│
└── README.md
```

---

## ⚙️ Backend Setup (Spring Boot)

1. Configure Supabase database credentials in:
   ```
   backend/src/main/resources/application.properties
   ```

2. Run the backend server:
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```

3. Backend runs on:
   ```
   http://localhost:8080
   ```

---

## 🎨 Frontend Setup (React)

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Frontend runs on:
   ```
   http://localhost:5173
   ```

---

## 🔗 REST API Endpoints

| HTTP Method | Endpoint | Description |
|------------|----------|-------------|
| POST | `/students` | Create a new student |
| GET | `/students` | Get all students |
| PUT | `/students/{id}` | Update student |
| DELETE | `/students/{id}` | Delete student |

---

## 🧠 Key Concepts Used

- RESTful API design
- Layered backend architecture (Controller, Service, Repository)
- JPA & Hibernate ORM
- Cloud database integration using Supabase
- React hooks and component-based UI
- Git version control with meaningful commits

---

## 📌 Future Enhancements

- Authentication & Authorization (JWT)
- Form validation
- Search and filtering
- Pagination
- Deployment (Vercel + Render)

---




