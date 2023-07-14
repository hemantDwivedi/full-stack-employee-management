import { NavLink } from "react-router-dom"

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand">Employee Management System</a>
                        <div className="collapse navbar-collapse ">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to='/employees' className='nav-link'>Employees</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/departments' className='nav-link'>Departments</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent