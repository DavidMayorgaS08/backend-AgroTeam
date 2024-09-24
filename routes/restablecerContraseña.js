import { Router } from "express";
import { restablecerContrasena, restablecerContrasenaToken } from "../controllers/restablecerContraseña.js";

const router = Router();

router.post("/restablecerContrasena", restablecerContrasena);
router.post("/recuperarContrasena/:token", restablecerContrasenaToken);

export default router;