const express = require("express");
const router = express.Router();

const {
  getAllTask,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/taskController");

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").patch(updateTask).delete(deleteTask).get(getTask)

module.exports = router;
