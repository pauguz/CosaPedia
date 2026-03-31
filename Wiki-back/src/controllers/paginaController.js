import db from '../config/db.js'; // Importamos el pool que configuramos antes
import { asignarPagina } from './usuario_paginaController.js';

//OBTENER ENTIDAD POR ID
export const getById = async (req, res) => {
    try {
        const usuarioId=req.params.id;
        // En mysql2, el método query devuelve un array: [filas, metadatos]
        // Usamos desestructuración [rows] para obtener solo los datos
        const query = `
        SELECT *
        FROM pagina 
        WHERE id = ?
      `;
        const [rows] = await db.execute(query, [usuarioId]);
        
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las Paginas' });
    }
};

// CREAR ENTIDAD
export const createByUser=async(req, res)=>{
    try{
        const usuario_id=req.params.userId;
        const cuerpo=req.body;
        const query= `INSERT INTO Pagina (nombre, contenido, tipo, updated_at) 
        VALUES (:name, :content, :type, NOW()) `;
        const [rows] = await db.execute(query, cuerpo);
        // El ID recién creado está en insertId
        const newPaginaId = rows.insertId;

        // 2. Llamar a la función para crear la relación en Usuario_Pagina
        await asignarPagina(usuario_id, newPaginaId, true);

        // 3. Responder al cliente solo cuando AMBAS operaciones hayan terminado
        res.status(201).json({
            message: "Página creada y asignada al usuario correctamente",
            paginaId: newPaginaId,
            usuarioId: usuario_id
        });
        
        
    } catch(error){
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las Paginas' });
    }
}

// OBTENER TODAS LAS ENTIDADES DE UN USUARIO
export const getByUser = async (req, res) => {
    try {
        const usuarioId=req.params.userId;
        const query = `
        SELECT *
        FROM pagina p
        LEFT JOIN usuario_pagina up ON p.id = up.pagina_id
        WHERE up.usuario_id = ?
        ORDER BY p.updated_at DESC
      `;
        const [rows] = await db.execute(query, [usuarioId]);
        
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las Paginas' });
    }
};

export const getRelated = async (req, res) => {
    try {
        const usuarioId=req.params.pageId;
        const query = `
        SELECT p.id, p.nombre, rel.lazo FROM pagina p
        LEFT JOIN relacion rel ON rel.primera_entidad_id = p.id
        LEFT JOIN pagina pag ON pag.id = rel.segunda_entidad_id
        WHERE pag.id = ?
        ORDER BY p.updated_at DESC
      `;
        const [rows] = await db.execute(query, [usuarioId]);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las Paginas' });
    }
};
