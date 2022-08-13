import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  title: { type: String, required: true },
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
  isImportant: { type: Boolean, default: false },
});

const UserModel = mongoose.model("ToDo", UserSchema);

export default UserModel;
