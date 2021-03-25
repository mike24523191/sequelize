import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();
// GEET: /api/user

router.get('/GET',userController.getUser);
router.post('/',userController.postUser);
router.delete('/',userController.deleteUser);
router.patch('/',userController.updateUser);



export default router;

