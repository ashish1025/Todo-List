const Todo = require('../models/todo');

/*
getAllTodo
postCreateTodo
putUpdateTodo
deleteTodo
*/


// to read all the todos
exports.getAllTodo = (req, res) => {
    Todo.find()
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => res
            .status(404)
            .json({
                message: "To do not found", error: err.message
            })
        );
}

// to create a new todo
exports.postCreateTodo = (req, res) => {
    Todo.create(req.body)
        .then((data) => res.json({ message: "Todo added successfully", data }))
        .catch((err) => res
            .status(400)
            .json({
                message: "Failed to add Todo", error: err.message
            })
        );
}

// to update a todo
exports.postUpdateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "Todo updated successfully", data }))
        .catch((err) => res
            .status(400)
            .json({
                message: "Failed to update Todo", error: err.message
            })
        );
}

// to delete the todo
exports.deleteTodo = (req, res) => {
    Todo.findByIdAndDelete(req.params.id, req.body)
        .then((data) => res.json({ message: "Todo deleted successfully", data }))
        .catch((err) => res
            .status(404)
            .json({
                message: "Failed to delete the Todo", error: err.message
            })
        );
}
