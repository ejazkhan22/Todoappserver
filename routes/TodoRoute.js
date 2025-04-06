const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController.js");

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.put("/:id", updateToDo);      // <-- this handles edit
router.delete("/:id", deleteToDo);   // <-- this handles delete

module.exports = router;
