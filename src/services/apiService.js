import { httpRequest } from '../utils/httpHelper';

const API_URL = 'https://reqres.in/api';

export const apiServices = {
  login: (email, password) => httpRequest(`${API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password })
  }),

  register: (email, password) => httpRequest(`${API_URL}/register`, {
    method: 'POST',
    body: JSON.stringify({ email, password })
  }),

  getUsers: (page = 1) => httpRequest(`${API_URL}/users?page=${page}`),

  createUser: (user) => httpRequest(`${API_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(user)
  }),

  updateUser: (id, user) => httpRequest(`${API_URL}/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user)
  }),

  deleteUser: (id) => httpRequest(`${API_URL}/users/${id}`, {
    method: 'DELETE'
  })
};