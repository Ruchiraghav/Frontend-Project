// src/api/studentApi.js
import axios from 'axios';

export const getAllStudents = () => axios.get('http://localhost:3000/students');
// export const addStudent = (data) => axios.post('/student', data);
// export const deleteStudent = (name) => axios.delete(`/student/${name}`);
// export const updateStudent = (name, data) => axios.put(`/student/${name}`, data);
