import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import EmployeeList from './pages/Employee-list/Employee-list'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
