import db from '../config/db.js';

export const login = async (req, res) => {
    const { nombre, contraseña } = req.body;

    try {
        // 1. Buscamos al usuario por su nombre
        const [rows] = await db.query('SELECT * FROM Usuario WHERE nombre = ?', [nombre]);

        // CASO 1: No existe el usuario
        if (rows.length === 0) {
            return res.status(404).json({ 
                success: false, 
                errorType: 'USER_NOT_FOUND',
                message: "El usuario no existe." 
            });
        }

        const usuario = rows[0];

        // CASO 2: Existe el usuario pero la contraseña no coincide
        // Nota: En el futuro, aquí usarás bcrypt.compare()
        if (usuario.contraseña !== contraseña) {
            return res.status(401).json({ 
                success: false, 
                errorType: 'INVALID_PASSWORD',
                message: "Contraseña incorrecta." 
            });
        }

        // CASO 3: Ingreso exitoso
        // Por ahora devolvemos los datos del usuario (menos la contraseña por seguridad)
        const { contraseña: _, ...datosUsuario } = usuario; 
        
        res.json({
            success: true,
            message: "¡Ingreso exitoso!",
            user: datosUsuario
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};