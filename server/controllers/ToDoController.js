import ToDoService from "../services/ToDoService.js";
import ApiError from "../exceptions/ApiError.js";

class ToDoController {
  async addToDo(req, res, next) {
    try {
      const { title, isImportant } = req.body;
      const { user } = req;

      const toDo = await ToDoService.addToDo(title, isImportant, user);

      return res.status(200).json({ toDo, message: "To do is added" });
    } catch (error) {
      next(ApiError.BadRequest(error));
    }
  }

  async removeToDo(req, res, next) {
    try {
      const { id } = req.params;
      const { user } = req;

      const deletedToDo = await ToDoService.removeToDo(id, user);

      return res.status(200).json({ deletedToDo, message: "To do is deleted" });
    } catch (error) {
      next(ApiError.BadRequest(error));
    }
  }
}

export default new ToDoController();
