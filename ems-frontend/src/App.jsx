import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FooterComponent from './component/FooterComponent'
import HeaderComponent from './component/HeaderComponent'
import ListEmployeeComponent from './component/ListEmployeeComponent'
import EmployeeComponent from './component/EmployeeComponent'
import ListDepartmentComponent from './component/ListDepartmentComponent'
import DepartmentComponent from './component/DepartmentComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<ListEmployeeComponent />} />
          <Route path='/employees' element={<ListEmployeeComponent />} />
          <Route path='/add-employee' element={<EmployeeComponent />} />
          <Route path='/update/employee/id/:id' element={<EmployeeComponent />} />
          <Route path='/departments' element={<ListDepartmentComponent />} />
          <Route path='/add-department' element={<DepartmentComponent />} />
          <Route path='/update-department/:id' element={<DepartmentComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
