import ToDoModel from "../models/ToDoModel.js";
import UserModel from "../models/UserModel.js";
import mongoose from "mongoose";
import ApiError from "../exceptions/ApiError.js";

class ToDoService {
  async addToDo(title, isImportant, userData) {
    const user = await UserModel.findById(userData.id);

    const newToDo = await ToDoModel.create({
      title,
      isImportant,
      userId: user._id,
    });
    return { newToDo };
  }

  async removeToDo(id, userData) {
    const ObjectId = mongoose.Types.ObjectId;
    const toDos = await ToDoModel.find({ userId: ObjectId(userData.id) });
    console.log(id);
    if (!id) {
      throw ApiError.BadRequest("ToDo ID is unknown");
    }

    if (toDos.length < 1) {
      throw ApiError.BadRequest(
        "hey! You are not able to delete todos that don`t belong to you!"
      );
    }

    const deletedToDo = await ToDoModel.deleteOne({ _id: ObjectId(id) });
    return { deletedToDo };
  }
  async getToDos(user) {
    const ObjectId = mongoose.Types.ObjectId;
    const toDos = await ToDoModel.find({ userId: ObjectId(user.id) });

    return { toDos };
  }
}

export default new ToDoService();
