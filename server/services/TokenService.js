import jwt from "jsonwebtoken";
import TokenModel from "../models/TokenModel.js";

class TokenService {
  generateTokens(payload) {
    console.log(payload);
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });

    return { accessToken, refreshToken };
  }

  async saveToken(userId, refreshToken) {
    let tokenData = await TokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    tokenData = await TokenModel.create({ refreshToken });
  }
}

export default new TokenService();
