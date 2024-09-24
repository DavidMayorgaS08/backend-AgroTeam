import { Router } from "express";
import { restablecerContrasena, restablecerContrasenaToken } from "../controllers/restablecerContraseña.js";

const router = Router();

router.post("/", restablecerContrasena);
router.post("/:token", restablecerContrasenaToken);

export default router;