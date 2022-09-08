import UserService from "../services/UserService.js";
import { validationResult } from "express-validator";
import ApiError from "../exceptions/ApiError.js";

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest(
            "Validation error, please check your credentials.",
            errors.array()
          )
        );
      }
      const { email, password } = req.body;

      const userData = await UserService.registration(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(200).json({ userData });
    } catch (error) {
      console.log(error);
    }
  }
  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await UserService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      console.log(e);
    }
  }
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      console.log(email, password);

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest(
            "Something is wrong with credentials",
            errors.array()
          )
        );
      }
      const userData = await UserService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.status(200).json({ ...userData });
    } catch (error) {
      console.log("error");

      next(ApiError.BadRequest(error));
    }
  }
  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;

      const token = await UserService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json(token);
    } catch (error) {
      next(ApiError.BadRequest(error));
    }
  }
  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await UserService.refresh(refreshToken);
      
      return res.status(200).json({ userData });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async getUsers(req, res, next) {
    try {
      return res.status(200).json(["user1", "user2"]);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserController();
