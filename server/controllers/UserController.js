import UserService from "../services/UserService.js";

class UserController {
  async registration(req, res, next) {
    try {
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
  async login(req, res, next) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
  async refresh(req, res, next) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
  async activate(req, res, next) {
    try {
    } catch (error) {
      console.log(error);
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
