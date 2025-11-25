import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Reviews API
export const reviewsAPI = {
  getAll: () => api.get('/reviews/'),
  create: (data) => api.post('/reviews/', data),
  getById: (id) => api.get(`/reviews/${id}/`),
};

// Future Projects API
export const futureProjectsAPI = {
  getAll: () => api.get('/future-projects/'),
  getFeatured: () => api.get('/future-projects/featured/'),
  create: (data) => api.post('/future-projects/', data),
  getById: (id) => api.get(`/future-projects/${id}/`),
};

// Ideas API
export const ideasAPI = {
  getAll: () => api.get('/ideas/'),
  create: (data) => api.post('/ideas/', data),
  getById: (id) => api.get(`/ideas/${id}/`),
};

export default api;

