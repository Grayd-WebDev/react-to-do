import Express from "express";

import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { router } from "./router/index.js";
import errorMiddleware from "./middlewares/error-middleware.js";

dotenv.config();

const app = Express();
const PORT = process.env.PORT || 5000;

app.use(Express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use("/api", router);
app.use(errorMiddleware);
const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
