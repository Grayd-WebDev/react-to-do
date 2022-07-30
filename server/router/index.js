import { Router } from "express";
import { body } from "express-validator";

import UserController from "../controllers/UserController.js";

const router = new Router();

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  UserController.registration
);
router.post(
  "/login",
  body("email").isEmail(),
  body("password").not().isEmpty(),
  body("email").not().isEmpty(),
  UserController.login
);
router.post("/logout");
router.get("/activate/:link");
router.get("/refresh");
router.get("/users", UserController.getUsers);

export { router };
