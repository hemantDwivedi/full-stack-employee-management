import { useState } from "react"

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const saveEmployee = (event) => {
        event.preventDefault();
        const employee = {firstName, lastName, email}
        console.log(employee);
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
                                    <input type="text" name="firstName" value={firstName} className="form-control mb-2" onChange={(event) => setFirstName(event.target.value)} />
                                    <label className="form-label">Last Name</label>
                                    <input type="text" name="lastName" value={lastName} className="form-control md-2" onChange={(event) => setLastName(event.target.value)} />
                                    <label className="form-label mt-2">Email</label>
                                    <input type="email" name="email" value={email} className="form-control" onChange={(event) => setEmail(event.target.value)} />
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