import { Router } from 'express';
import { login } from '../controllers/authController';

const router = Router();

router.post('/login', login); // Rota de login

export default router;


router.get('/', (req, res) => {
  res.send('Servidor está funcionando!');
});
