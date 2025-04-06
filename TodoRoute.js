const { Router } = require("express");
const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController");

const router = Router();

router.get("/todos", getToDo);           // GET /api/todos
router.post("/save", saveToDo);          // POST /api/save
router.put("/update/:id", updateToDo);   // PUT /api/update/:id
router.delete("/delete/:id", deleteToDo);// DELETE /api/delete/:id

module.exports = router;
