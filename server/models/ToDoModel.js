import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
  toDoes: { type: Array},
});

const UserModel = mongoose.model("ToDo", UserSchema);

export default UserModel;
