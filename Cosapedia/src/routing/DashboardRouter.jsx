import React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard'

const DashboardRouter = () => {
  return (
    <Routes>
      <Route path='*' element= {<Dashboard/>} />
    </Routes>
  )
}

export default DashboardRouter
