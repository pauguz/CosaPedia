import db from '../config/db.js'; // Importamos el pool que configuramos antes

export const asignarPagina = async (usuario_id, pagina_id, bool) => {
    const query = `INSERT INTO Usuario_Pagina (usuario_id, pagina_id, dominio) VALUES (?, ?, ?)`;
    // El tercer valor es 'true' (1) porque al crearla, el usuario es el dueño
    await db.execute(query, [usuario_id, pagina_id, bool]);
};


//Debug
export const perUsuario = async (req, res) => {

    try{const query = `Select * From usuario_pagina`;
    const [rows] = await db.query(query);
    res.json(rows); }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las Paginas' });
    }
};