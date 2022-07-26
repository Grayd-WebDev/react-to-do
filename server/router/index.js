import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = new Router();

router.post("/registration", UserController.registration);
router.post("/login");
router.post("/logout");
router.get("/activate/:link");
router.get("/refresh");
router.get("/users", UserController.getUsers);

export { router };
