# Task Manager - MERN Stack

A full-stack Task Manager application built with MongoDB, Express.js, React (Vite), and Node.js. Create, view, and delete tasks with a clean, responsive interface.


## 🚀 Live Demo

- **Frontend:** [https://task-manager-orpin-one.vercel.app](https://task-manager-orpin-one.vercel.app)
- **Backend API:** [https://task-manager-api-51nt.onrender.com](https://task-manager-api-51nt.onrender.com)
- **GitHub Repository:** [https://github.com/NIHHHHHHHHHHH/Task-Manager](https://github.com/NIHHHHHHHHHHH/Task-Manager)

## ✨ Features

- ✅ **Create Tasks** - Add new tasks with validation
- ✅ **View Tasks** - See all tasks sorted by creation date
- ✅ **Delete Tasks** - Remove completed tasks
- ✅ **Input Validation** - Real-time validation with character counter (max 200 chars)
- ✅ **Error Handling** - User-friendly error messages
- ✅ **Loading States** - Visual feedback during operations
- ✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ✅ **Modern UI** - Built with Tailwind CSS v4.1

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure
```
task-manager/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database connection
│   ├── models/
│   │   └── Task.js               # Task schema and model
│   ├── routes/
│   │   └── taskRoutes.js         # API route handlers
│   ├── middleware/
│   │   └── errorHandler.js       # Global error handling
│   ├── .env.example              # Environment variables template
│   ├── .gitignore
│   ├── server.js                 # Express server entry point
│   ├── package.json
│   └── README.md                 # Backend documentation
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx      # Task input form
│   │   │   ├── TaskList.jsx      # Task list container
│   │   │   └── TaskItem.jsx      # Individual task component
│   │   ├── services/
│   │   │   └── api.js            # API service layer
│   │   ├── App.jsx               # Main application component
│   │   ├── index.css             # Global styles with Tailwind
│   │   └── main.jsx              # Application entry point
│   ├── .env.example              # Environment variables template
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── README.md                 # Frontend documentation
│
├── .gitignore
└── README.md                     # This file
```

## 🚦 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB Atlas Account** (free tier available)
- **Git**

### Installation

1. **Clone the repository:**
```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
```

2. **Set up Backend:**
```bash
   cd backend
   npm install
```

   Create `.env.local` file:
```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=development
```

   Start backend server:
```bash
   npm run dev
```

   Backend will run on `http://localhost:5000`

3. **Set up Frontend:**
```bash
   cd ../frontend
   npm install
```

   Create `.env.local` file:
```env
   VITE_API_URL=http://localhost:5000/api
```

   Start frontend server:
```bash
   npm run dev
```

   Frontend will run on `http://localhost:3000`

4. **Open your browser:**
```
   http://localhost:3000
```

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Get All Tasks
```http
GET /tasks
```

**Response (200 OK):**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "657abc...",
      "title": "Complete project",
      "createdAt": "2024-12-17T10:30:00.000Z"
    }
  ]
}
```

#### Create Task
```http
POST /tasks
Content-Type: application/json

{
  "title": "New task"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "_id": "657abc...",
    "title": "New task",
    "createdAt": "2024-12-17T10:30:00.000Z"
  }
}
```

**Validation Rules:**
- Title is required
- Title cannot be empty or only whitespace
- Title cannot exceed 200 characters

#### Delete Task
```http
DELETE /tasks/:id
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Task deleted successfully",
  "data": {}
}
```

**Error Response (404 Not Found):**
```json
{
  "success": false,
  "message": "Task not found"
}
```

## 🎨 Features Breakdown

### Input Validation
- Empty string prevention
- Automatic whitespace trimming
- Maximum 200 characters
- Real-time character counter
- User-friendly error messages

### Error Handling
- Network error handling
- API error responses
- Validation errors
- Loading state management
- Graceful error recovery

### UI/UX Features
- Responsive grid layout
- Smooth transitions and hover effects
- Loading spinners
- Empty state messaging
- Gradient background design
- Accessible components
- Mobile-first design

## 🔧 Development Scripts

### Backend
```bash
npm run dev     # Start with nodemon (auto-reload)
npm start       # Start production server
```

### Frontend
```bash
npm run dev     # Start development server (port 3000)
npm run build   # Build for production
npm run preview # Preview production build
```


## 📄 Environment Variables

### Backend (`.env.local`)
```env
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/taskmanager
NODE_ENV=development
```

### Frontend (`.env.local`)
```env
VITE_API_URL=http://localhost:5000/api
```



