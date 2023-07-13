import { useState } from "react"
import { createEmployee } from "../services/EmployeeService"
import { useNavigate } from "react-router-dom"

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigate = useNavigate()

    function saveEmployee(event) {
        event.preventDefault();

        if (validateForm()) {
            const employee = { firstName, lastName, email }
            createEmployee(employee)
                .then(response => navigate('/employees'))
                .catch(error => { console.error(error); navigate('/add-employee') })
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

        setErrors(errorCopy);
        return valid;
    }

    return (
        <div>
            <div className="container p-5">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 mt-5">
                        <div className="pt-3">
                            <p className="fs-3 fw-light text-center">Add New Employee Details</p>
                            <hr />
                        </div>
                        <div className="card-body">
                            <form action="post">
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name</label>
                                    <input type="text" name="firstName" value={firstName} className={`form-control mb-2 ${errors.firstName ? 'is-invalid' : ''}`} onChange={(event) => setFirstName(event.target.value)} />
                                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                    <label className="form-label">Last Name</label>
                                    <input type="text" name="lastName" value={lastName} className={`form-control mb-2 ${errors.lastName ? 'is-invalid' : ''}`} onChange={(event) => setLastName(event.target.value)} />
                                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                    <label className="form-label mt-2">Email</label>
                                    <input type="email" name="email" value={email} className={`form-control mb-2 ${errors.email ? 'is-invalid' : ''}`} onChange={(event) => setEmail(event.target.value)} />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>
                                <div className="mt-3">
                                    <button className="btn btn-danger fw-bold" onClick={saveEmployee}>Submit</button>
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