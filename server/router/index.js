import { Router } from "express";
import { body } from "express-validator";
import ToDoController from "../controllers/ToDoController.js";

import UserController from "../controllers/UserController.js";
import authMiddleware from "../middlewares/auth-middleware.js";

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
router.post("/logout", UserController.logout);
router.post("/todo", authMiddleware, ToDoController.addToDo);
router.get("/todo", authMiddleware, ToDoController.getToDos);
router.put("/todo/:id", authMiddleware, ToDoController.updateToDo);
router.delete("/todo/:id", authMiddleware, ToDoController.removeToDo);
router.get("/activate/:link");
router.get("/refresh", UserController.refresh);
router.get("/users", UserController.getUsers);

export { router };
