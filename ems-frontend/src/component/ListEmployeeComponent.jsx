import { useEffect } from "react"
import { useState } from "react"
import { deleteExistingEmployee, listEmployees } from "../services/EmployeeService"
import { useNavigate } from "react-router-dom"

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        retrieveAllEmployees()
    }, [])

    function retrieveAllEmployees(){
        listEmployees()
            .then(response => setEmployees(response.data))
            .catch(error => console.error(error))
    }

    function addNewEmployee() {
        navigate('/add-employee')
    }

    function updateEmployee(id){
        navigate(`/update/employee/id/${id}`)
    }

    function deleteEmployee(id){
        deleteExistingEmployee(id)
        .then(retrieveAllEmployees())
        .catch(error => console.error(error))
    }

    return (
        <>
            <div className="container p-5">
                <div>
                    <h2 className="fw-light text-center">List of Employees</h2>
                </div>
                <div>
                    <button className="btn btn-dark mb-3" onClick={addNewEmployee}>ADD EMPLOYEE</button>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map(employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <button className="btn btn-dark" onClick={() => updateEmployee(employee.id)}>UPDATE</button>
                                            <button className="btn btn-secondary mx-2" onClick={() => deleteEmployee(employee.id)}>DELETE</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ListEmployeeComponent