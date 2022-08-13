import ToDoModel from "../models/ToDoModel.js";
import UserModel from "../models/UserModel.js";
import mongoose from "mongoose";
import ApiError from "../exceptions/ApiError.js";

class ToDoService {
  async addToDo(title, isImportant, userData) {
    const user = await UserModel.findById(userData.id);
    console.log(user);
    const newToDo = await ToDoModel.create({
      title,
      isImportant,
      userId: user._id,
    });
    console.log(newToDo);
    return { newToDo };
  }

  async removeToDo(id, userData) {
    const ObjectId = mongoose.Types.ObjectId;
    const toDos = await ToDoModel.find({ userId: ObjectId(userData.id) });

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
  async getToDos() {
    const toDos = await ToDoModel.find();
    console.log(toDos);
    return {};
  }
}

export default new ToDoService();
