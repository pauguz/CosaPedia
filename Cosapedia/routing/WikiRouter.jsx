import React from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import Login from '../src/pages/login';
import Dashboard from '../src/pages/dashboard';

const WikiRouter = () => {
  return (
      <Routes>
          <Route path='login' element= {<Login/>}/>
          <Route path='*' element= {<Dashboard/>}/>
      </Routes>
  )
}

export default WikiRouter
