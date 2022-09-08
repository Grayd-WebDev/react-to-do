import ToDoService from "../services/ToDoService.js";
import ApiError from "../exceptions/ApiError.js";

class ToDoController {
  async addToDo(req, res, next) {
    try {
      const { title, isImportant } = req.body;
      const { user } = req;
      console.log(req.body);
      const toDo = await ToDoService.addToDo(title, isImportant, user);

      return res.status(200).json({ toDo, message: "To do is added" });
    } catch (e) {
      next(ApiError.BadRequest(e));
    }
  }

  async removeToDo(req, res, next) {
    try {
      const { id } = req.params;
      const { user } = req;

      const deletedToDo = await ToDoService.removeToDo(id, user);

      return res.status(200).json({ deletedToDo, message: "To do is deleted" });
    } catch (e) {
      next(ApiError.BadRequest(e));
    }
  }
  async updateToDo(req, res, next) {
    try {
      console.log(req.params);
      return res.status(200).json({ message: "TODO UPDATE" });
    } catch (e) {
      next(ApiError.BadRequest(e));
    }
  }
  async getToDos(req, res, next) {
    try {
      const user = req.user;
      const toDos = await ToDoService.getToDos(user);
      return res.status(200).json({ toDos });
    } catch (e) {
      next(ApiError.BadRequest(e));
    }
  }
}

export default new ToDoController();
