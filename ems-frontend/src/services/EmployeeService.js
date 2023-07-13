import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/v1/employees';

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee)

export const retrieveSpecificEmployee = (id) => axios.get(REST_API_BASE_URL + '/' + id)

export const udpateExistingEmployee = (employee, id) =>  axios.put(REST_API_BASE_URL + '/' + id, employee)

export const deleteExistingEmployee = (id) => axios.delete(REST_API_BASE_URL + '/' + id)