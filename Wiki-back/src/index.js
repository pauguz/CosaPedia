import express from 'express';
import paginaRoutes from './routes/paginaRouter.js';
import usuarioRoutes from './routes/usuarioRouter.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors()); // Permite todo
// "Montamos" las rutas en un prefijo
app.use('/api/page', paginaRoutes);
app.use('/api/user', usuarioRoutes);


app.listen(3000, () => console.log("Servidor en puerto 3000"));