import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();
// GEET: /api/user

router.get('/GET',userController.getUser);
router.post('/',userController.postUser);


export default router;

