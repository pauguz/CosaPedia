import express from 'express';
import { createByUser, getById, getByUser, getRelated } from "../controllers/paginaController.js";
import { perUsuario } from '../controllers/usuario_paginaController.js';


const router = express.Router();
router.get('/user/peruser', perUsuario );


// Definimos las rutas relativas
router.get('/:id',getById );
router.get('/user/:userId',getByUser );
router.get('/relation/:pageId', getRelated );
router.post('/create/:userId', createByUser );

export default router;
