import { Router } from 'express';
import user from './user';

// /api/user
// /api/product

const router = Router();

router.use('/user',user);

export default router;