import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/v1/departments';

export const listDepartment = () => axios.get(REST_API_BASE_URL);

export const createDepartment = (department) => axios.post(REST_API_BASE_URL, department)

export const retrieveSpecificDepartment= (id) => axios.get(REST_API_BASE_URL + '/' + id)

export const udpateExistingDepartment = (department, id) =>  axios.put(REST_API_BASE_URL + '/' + id, department)

export const deleteExistingDepartment = (id) => axios.delete(REST_API_BASE_URL + '/' + id)