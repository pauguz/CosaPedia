import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

const WikiRouter = () => {
  // 1. Extraemos el estado de autenticación del Store
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <Routes>
      <Route 
        path="login" 
        element={!isAuthenticated ? <Login /> : <Navigate to="/" />} 
      />
      <Route 
        path="*" 
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
      />
    </Routes>
  );
};

export default WikiRouter;