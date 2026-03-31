import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { pageService } from '../services/pageService';
import PageCard from '../components/pageCard';
import './Dashboard.css';

const Dashboard = () => {
  const [paginas, setPaginas] = useState([]);
  const user = useSelector((state) => state.user.data);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        if (user?.id) {
          const data = await pageService.perUser(user.id);
          setPaginas(data);
        }
      } catch (err) {
        console.error("Error cargando páginas", err);
      }
    };
    fetchPages();
  }, [user]);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Mi Biblioteca Histórica</h1>
        <p>Bienvenido, <strong>{user?.nombre}</strong></p>
      </header>

      <div className="pages-grid">
        {paginas.length > 0 ? (
          paginas.map(p => <PageCard key={p.id} pagina={p} />)
        ) : (
          <p className="empty-msg">No has creado páginas aún. ¡Empieza tu investigación!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
