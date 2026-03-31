import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login as setLoginState } from '../store/slices/authSlice';
import { useSelector } from 'react-redux';

import { authService } from '../services/authService'; 
import './login.css'

const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({ nombre: '', contraseña: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{console.log(isAuthenticated)}, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authService.login(formData);
      if (response.success) {
        // Guardamos en el Store de Redux
        dispatch(setLoginState(response.user)); 
        console.log("Login exitoso");
        navigate('/*');
      }
    } catch (err) {
      // Manejamos los 3 casos que programamos en el back
      const msg = err.response?.data?.message || "Error de conexión";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Wiki Historia</h2>
        <p>Ingresa a tu biblioteca personal</p>
        
        {error && <div className="error-badge">{error}</div>}

        <input
          type="text"
          name="nombre"
          placeholder="Nombre de usuario"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};

export default Login;