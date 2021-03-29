import { Router } from 'express';
import userController from '../controllers/userController';
import userMiddleware from '../middlewares/user'

const router = Router();
// GEET: /api/user

router.get('/GET',userController.getUser);
router.post('/',userController.postUser);
router.post('/find',userMiddleware.Authenticate);
router.delete('/',userController.deleteUser);
router.patch('/',userController.updateUser);



export default router;

