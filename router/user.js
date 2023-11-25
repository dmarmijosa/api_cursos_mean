import routerx from "express-promise-router";
import userController from "../controllers/user";
import auth from '../middlewares/auth'
const router = routerx();

router.post("/register", userController.register);
router.post("/login_tienda",userController.login);
router.post("/login_admin",userController.login_admin);

export default router;
