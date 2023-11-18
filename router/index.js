import Router from 'express-promise-router';
import User from './user';
const router = Router();
router.use('/user',User);
export default router;