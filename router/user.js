import routerx from "express-promise-router";
import userController from "../controllers/user";
import auth from '../middlewares/auth'
const router = routerx();

router.post("/register", userController.register);
router.post("/login",userController.login);

export default router;
