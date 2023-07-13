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
        <Routes><Route path='/' element={<ListEmployeeComponent />}></Route></Routes>
        <Routes><Route path='/employees' element={<ListEmployeeComponent />}></Route></Routes>
        <Routes><Route path='/add-employee' element={<EmployeeComponent />}></Route></Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
