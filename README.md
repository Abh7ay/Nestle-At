# Real Estate Website with Django Backend

A modern real estate website built with React (Vite) frontend and Django REST Framework backend.

## Features

- **Completed Projects**: Showcase of finished real estate projects
- **Future Projects**: Display upcoming projects with details
- **Reviews/Testimonials**: Customer reviews with rating system
- **Submit Ideas**: Form for users to submit project ideas
- **Backend API**: Django REST Framework API for data management

## Project Structure

```
├── backend/          # Django backend configuration
├── api/              # Django API app (models, views, serializers)
├── src/              # React frontend
│   ├── components/   # React components
│   └── services/     # API service layer
├── requirements.txt  # Python dependencies
└── package.json      # Node.js dependencies
```

## Setup Instructions

### Prerequisites

- Python 3.8+ 
- Node.js 16+
- npm or yarn

### Backend Setup (Django)

1. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
   Or use `pip3` if needed:
   ```bash
   pip3 install -r requirements.txt
   ```

2. **Run migrations**:
   ```bash
   python manage.py migrate
   ```
   Or use `python3` if needed:
   ```bash
   python3 manage.py migrate
   ```

3. **Create a superuser** (optional, for admin access):
   ```bash
   python manage.py createsuperuser
   ```

4. **Start the Django development server**:
   ```bash
   python manage.py runserver
   ```

   The backend API will be available at `http://localhost:8000`
   - API endpoints: `http://localhost:8000/api/`
   - Admin panel: `http://localhost:8000/admin/`

### Frontend Setup (React)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`

## API Endpoints

### Reviews
- `GET /api/reviews/` - Get all approved reviews
- `POST /api/reviews/` - Submit a new review (requires approval)

### Future Projects
- `GET /api/future-projects/` - Get all future projects
- `GET /api/future-projects/featured/` - Get featured projects
- `POST /api/future-projects/` - Create a new future project

### Ideas
- `GET /api/ideas/` - Get all submitted ideas
- `POST /api/ideas/` - Submit a new idea

## Admin Panel

Access the Django admin panel at `http://localhost:8000/admin/` to:
- Approve/reject reviews
- Manage future projects
- Review submitted ideas
- Mark projects as featured

## Usage

1. **Start both servers**:
   - Terminal 1: Django backend (`python manage.py runserver`)
   - Terminal 2: React frontend (`npm run dev`)

2. **Navigate to the website** at `http://localhost:5173`

3. **Use the features**:
   - View completed projects
   - Browse future projects
   - Read and submit reviews
   - Submit your ideas

## Notes

- Reviews submitted through the frontend require admin approval before appearing
- The backend uses SQLite by default (suitable for development)
- CORS is configured to allow requests from the React development server
- All API endpoints support CRUD operations through Django REST Framework

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion, Axios
- **Backend**: Django, Django REST Framework, SQLite
- **API**: RESTful API with Django REST Framework
