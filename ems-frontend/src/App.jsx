import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FooterComponent from './component/FooterComponent'
import HeaderComponent from './component/HeaderComponent'
import ListEmployeeComponent from './component/ListEmployeeComponent'
import EmployeeComponent from './component/EmployeeComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<ListEmployeeComponent />} />
          <Route path="/employees" element={<ListEmployeeComponent />} />
          <Route path='/add-employee' element={<EmployeeComponent />} />
          <Route path='/update/employee/id/:id' element={<EmployeeComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
