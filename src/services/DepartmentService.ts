import axios from 'axios';
import { Department } from '../types/Department';

const API_URL = 'http://localhost:5041/api/Department';

export const getDepartments = async () => {
  const response = await axios.get<Department[]>(`${API_URL}/GetDepartments`);
  return response.data;
};

export const getDepartment = async (id: number) => {
  const response = await axios.get<Department>(`${API_URL}/GetDepartment/${id}`);
  return response.data;
};

export const createDepartment = async (department: Department) => {
  const response = await axios.post(`${API_URL}/InsertDept`, department);
  return response.data;
};

export const updateDepartment = async (id: number, department: Department) => {
  const response = await axios.put(`${API_URL}/UpdateDept/${id}`, department);
  return response.data;
};

export const deleteDepartment = async (id: number) => {
  const response = await axios.delete(`${API_URL}/DeleteDept/${id}`);
  return response.data;
};