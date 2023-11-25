import Router from 'express-promise-router';
import User from './user';
const router = Router();
router.use('/users',User);
export default router;