import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// Function for user registration
export const register = (formData) => API.post('/register', formData);

// Function for user login
export const login = (formData) => API.post('/login', formData);
