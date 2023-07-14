import { useEffect, useState } from "react"
import { createDepartment, retrieveSpecificDepartment, udpateExistingDepartment } from "../services/DepartmentApiService"
import { useNavigate, useParams } from "react-router-dom"

const DepartmentComponent = () => {


    const [departmentName, setDepartmentName] = useState('')
    const [departmentDescription, setDepartmentDescription] = useState('')
    const {id} = useParams()
    const [errors, setErrors] = useState({
        departmentName: '',
        departmentDescription: ''
    })
    const navigate = useNavigate()

    useEffect(() => {
        retrieveSpecificDepartment(id)
        .then(response => {
            setDepartmentName(response.data.departmentName)
            setDepartmentDescription(response.data.departmentDescription)
        })
        .catch(error => console.error(error))
    }, [id])

    function saveOrUpdateDepartment(event){
        event.preventDefault()
        if(validateDepartmentForm()){
            const department = {departmentName, departmentDescription}
            if(id){
                udpateExistingDepartment(department, id)
                .then(navigate('/departments'))
                .catch(error => console.error(error))
            } else {
                createDepartment(department)
                .then(navigate('/departments'))
                .catch(error => console.error(error))
            }
        }
    }

    function validateDepartmentForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(departmentName.trim()){
            errorsCopy.departmentName = ''
        } else{
            errorsCopy.departmentName = 'Department name is required'
            valid = false;
        }
        
        if(departmentDescription.trim()){
            errorsCopy.departmentDescription = ''
        } else{
            errorsCopy.departmentDescription = 'Department description is required'
            valid = false;
        }

        setErrors(errorsCopy)

        return valid;
    }

    function pageTitle() {
        if (id) {
            return <p className="fs-3 fw-light text-center">Update Department</p>
        } else {
            return <p className="fs-3 fw-light text-center">Add Department</p>
        }
    }

    return (
        <div>
            <div className="container p-5">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 mt-5">
                        <div className="pt-3">
                            {pageTitle()}
                            <hr />
                        </div>
                        <div className="card-body">
                            <form action="post">
                                <div className="form-group mb-2">

                                    <label className="form-label">Department Name</label>
                                    <input
                                    type="text"
                                    name="departmentName" 
                                    value={departmentName}
                                    className={`form-control mb-2 ${errors.departmentName ? 'is-invalid' : ''}`}
                                    onChange={(event) => setDepartmentName(event.target.value)} />
                                    {errors.departmentName && <div className="invalid-feedback">{errors.departmentName}</div>}

                                    <label className="form-label">Department Desciption</label>
                                    <input
                                    type="text"
                                    name="departmentDescription"
                                    value={departmentDescription}
                                    className={`form-control mb-2 ${errors.departmentDescription ? 'is-invalid' : ''}`}
                                    onChange={(event) => setDepartmentDescription(event.target.value)} />
                                    {errors.departmentDescription && <div className="invalid-feedback">{errors.departmentDescription}</div>}

                                </div>
                                <div className="mt-3">
                                    <button className="btn btn-danger fw-bold" onClick={saveOrUpdateDepartment}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DepartmentComponent