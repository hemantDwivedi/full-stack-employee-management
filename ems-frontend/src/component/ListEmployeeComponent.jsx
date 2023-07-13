
const ListEmployeeComponent = () => {
    const emp = [
        {
            id: 1,
            "fisrtName": "Hemant",
            "lastName": "K",
            "email": "hemant12@gmail.com"
        }
    ]
    return (
        <>
        <div className="container p-5">
        <div>
            <h2 className="fw-light text-center">List of Employees</h2>
        </div>
        <div>
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
                        emp.map( em => 
                            <tr key={em.id}>
                                <td>{em.id}</td>
                                <td>{em.firstName}</td>
                                <td>{em.lastName}</td>
                                <td>{em.email}</td>
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