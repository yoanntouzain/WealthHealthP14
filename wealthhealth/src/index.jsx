import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import EmployeeList from './pages/Employee-list/Employee-list'
import TestDataTable from './Components/DataTables/DataTables'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="/testDataTable" element={<TestDataTable />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
