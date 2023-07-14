import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { deleteExistingDepartment, listDepartment } from "../services/DepartmentApiService"

const ListDepartmentComponent = () =>{

    const [departments, setDepartments] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        retrieveAllDepartments()
    }, [])

    function retrieveAllDepartments(){
        listDepartment()
        .then(response => setDepartments(response.data))
        .catch(error => console.error(error))
    }

    function updateDepartment(id){
        navigate(`/update-department/${id}`)
    }

    function deleteDepartment(id){
        deleteExistingDepartment(id)
        .then(retrieveAllDepartments)
        .catch(error => console.error(error))
    }

    return (
        <>
            <div className="container p-5">
                <div>
                    <h2 className="fw-light text-center">List of Departments</h2>
                </div>
                <div>
                    <Link to='/add-department' className="btn btn-dark mb-3">ADD DEPARTMENT</Link>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Department Name</th>
                                <th>Department Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                departments.map(department =>
                                    <tr key={department.id}>
                                        <td>{department.id}</td>
                                        <td>{department.departmentName}</td>
                                        <td>{department.departmentDescription}</td>
                                        <td>
                                            <button className="btn btn-dark" onClick={() => updateDepartment(department.id)}>UPDATE</button>
                                            <button className="btn btn-secondary mx-2" onClick={() => deleteDepartment(department.id)}>DELETE</button>
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

export default ListDepartmentComponent