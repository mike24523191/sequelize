import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();
// GEET: /api/user

router.get('/GET',userController.getUser);
router.get('/FFF', userController.fffUser)


export default router;

