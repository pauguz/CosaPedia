import React from 'react';
import './PageCard.css';

const PageCard = ({ pagina, func= ()=>{} }) => {
  const { nombre, contenido='', tipo, updated_at } = pagina;

  // Truncar contenido a 25 caracteres
  const resumen = contenido.length > 25 
    ? contenido.substring(0, 25) + "..." 
    : contenido;

  // Formatear fecha básica
  const fecha = new Date(updated_at).toLocaleDateString();

  return (
    <div className={`page-card tipo-${tipo}`}>
      <div className="card-header">
        <span className="badge">{tipo}</span>
        <span className="date">{fecha}</span>
      </div>
      <h3 className="card-title">{nombre}</h3>
      <p className="card-excerpt">{resumen}</p>
    </div>
  );
};

export default PageCard;