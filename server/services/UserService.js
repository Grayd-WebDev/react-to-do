import TokenService from "./TokenService.js";
import MailService from "./MailService.js";
import UserModel from "../models/UserModel.js";
import UserDto from "../dtos/UserDto.js";
import bcrypt from "bcrypt";
import { v4 } from "uuid";

class UserService {
  static async registration(email, password) {
    try {
      const candidate = await UserModel.findOne({ email });
      if (candidate) {
        throw new Error(`User with the mail ${email} is already exist!`);
      }
      const hashPassword = await bcrypt.hash(password, 2);
      const activationLink = v4();

      const newUser = await UserModel.create({
        email,
        password: hashPassword,
        activationLink,
      });

      await MailService.sendActivationMail(email, activationLink);

      const userDto = new UserDto(newUser);
      const tokens = await TokenService.generateTokens({ ...userDto });
      await TokenService.saveToken(userDto.id, tokens.refreshToken);

      return {
        ...tokens,
        user: userDto,
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
export default UserService;
