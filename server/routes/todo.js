const express = require("express");
const router = express.Router();

const {
    getAllTodo,
    postCreateTodo,
    postUpdateTodo,
    deleteTodo,
} = require("../controllers/todo");

router.get("/", getAllTodo);
router.post("/", postCreateTodo);
router.put("/:id", postUpdateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
