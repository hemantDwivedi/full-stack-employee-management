import { useEffect } from "react"
import { useState } from "react"
import { listEmployees } from "../services/EmployeeService"
import { Navigate, useNavigate } from "react-router-dom"

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        listEmployees()
        .then(response => setEmployees(response.data)) 
        .catch(error => console.error(error))
    }, [])

    function addNewEmployee(){
        navigate('/add-employee')
    }
    
    return (
        <>
        <div className="container p-5">
        <div>
            <h2 className="fw-light text-center">List of Employees</h2>
        </div>
        <div>
            <button className="btn btn-dark mb-3" onClick={addNewEmployee}>Add Employee</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map( employee => 
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
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