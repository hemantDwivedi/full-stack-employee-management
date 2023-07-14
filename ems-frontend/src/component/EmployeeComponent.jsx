import { useEffect, useState } from "react"
import { createEmployee, retrieveSpecificEmployee, udpateExistingEmployee } from "../services/EmployeeService"
import { useNavigate, useParams } from "react-router-dom"
import { listDepartment } from "../services/DepartmentApiService"

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [departmentId, setDepartmentId] = useState('')
    const [departments, setDepartments] = useState([])


    useEffect(() => {
        listDepartment()
            .then(resposne => { setDepartments(resposne.data) })
            .catch(error => console.error(error))
    }, [])

    const { id } = useParams()
    useEffect(() => {
        if (id) {
            retrieveSpecificEmployee(id)
                .then(response => {
                    setFirstName(response.data.firstName)
                    setLastName(response.data.lastName)
                    setEmail(response.data.email)
                    setDepartmentId(response.data.departmentId)
                })
                .catch(error => console.error(error))
        }
    }, [id])

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    })

    const navigate = useNavigate()

    function saveOrUpdateEmployee(event) {
        event.preventDefault();
        if (validateForm()) {
            const employee = { firstName, lastName, email, departmentId }
            if (id) {
                udpateExistingEmployee(employee, id)
                    .then(navigate('/employees'))
                    .catch(error => console.error(error))
            } else {
                createEmployee(employee)
                    .then(navigate('/employees'))
                    .catch(error => { console.error(error); navigate('/add-employee') })
            }
        }
    }


    function validateForm() {
        let valid = true;

        const errorCopy = { ...errors }

        if (firstName.trim()) {
            errorCopy.firstName = ''
        } else {
            errorCopy.firstName = 'First name is required'
            valid = false;
        }
        if (lastName.trim()) {
            errorCopy.lastName = ''
        } else {
            errorCopy.lastName = 'Last name is required'
            valid = false;
        }
        if (email.trim()) {
            errorCopy.email = ''
        } else {
            errorCopy.email = 'Email is required'
            valid = false;
        }
       
        if (departmentId) {
            errorCopy.department = ''
        } else {
            errorCopy.department = 'Select department'
            valid = false;
        }

        setErrors(errorCopy);
        return valid;
    }

    function pageTitle() {
        if (id) {
            return <p className="fs-3 fw-light text-center">Update Employee</p>
        } else {
            return <p className="fs-3 fw-light text-center">Add Employee Details</p>
        }
    }

    return (
        <div>
            <div className="container p-3">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 mt-5">
                        <div className="pt-3">
                            {pageTitle()}
                            <hr />
                        </div>
                        <div className="card-body">
                            <form action="post">
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name</label>
                                    <input type="text" name="firstName" value={firstName} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} onChange={(event) => setFirstName(event.target.value)} />
                                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                </div>

                                <div className="form-gorup mb-2">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" name="lastName" value={lastName} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} onChange={(event) => setLastName(event.target.value)} />
                                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label mt-2">Email</label>
                                    <input type="email" name="email" value={email} className={`form-control ${errors.email ? 'is-invalid' : ''}`} onChange={(event) => setEmail(event.target.value)} />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Select Department</label>
                                    <select
                                    className={`form-control mb-2 ${errors.department? 'is-invalid' : ''}`}
                                    value={departmentId}
                                    onChange={(event) => setDepartmentId(event.target.value)}
                                    >
                                        <option value="Select Department">Select Department</option>
                                        {
                                            departments
                                            .map(department => 
                                                <option key={department.id} value={department.id}>{department.departmentName}</option>
                                                )
                                        }
                                    </select>
                                    {errors.department && <div className="invalid-feedback">{errors.department}</div>}
                                </div>
                                <div className="mt-3">
                                    <button className="btn btn-danger fw-bold" onClick={saveOrUpdateEmployee}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent