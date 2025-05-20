# Task Manager (MERN Stack)

A full-stack task manager app built using the MERN stack. Users can create, update, delete, and view tasks with a clean, responsive UI.

---

##  Tech Stack

- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Other**: CORS, dotenv, mongoose

---

##  Getting Started

###  Clone the project:

```bash
git clone <repo-url>
cd task-manager
```

---

###  Start Backend

```bash
cd backend
npm install
echo PORT=5000 > .env
echo MONGO_URI=mongodb://localhost:27017/task-manager >> .env
npm run dev
```

---

###  Start Frontend

```bash
cd ../frontend
npm install
npm start
```

---

##  API Routes

All endpoints prefixed with `/tasks`

| Method | Route          | Description         |
|--------|----------------|---------------------|
| GET    | `/tasks`       | Get all tasks       |
| POST   | `/tasks`       | Create a task       |
| PUT    | `/tasks/:id`   | Update a task       |
| DELETE | `/tasks/:id`   | Delete a task       |

---

##  Folder Structure

```
task-manager/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── api.js
│   │   ├── index.js
│   ├── tailwind.config.js
├── README.md
```

---
