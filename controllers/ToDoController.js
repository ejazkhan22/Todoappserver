const ToDoModel = require("../models/ToDoModel.js");
const mongoose = require("mongoose")


// Get all todos
module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find();
        res.status(200).json(toDo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Save a new todo


module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;

    if (!text) return res.status(400).json({ message: "Text is required" });

    try {
        const newToDo = await ToDoModel.create({ text });
        res.status(201).json(newToDo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// (Optional placeholder for delete)


module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.params;

  try {
    await ToDoModel.findOneAndDelete(_id);
    res.status(200).json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};

module.exports.updateToDo = async (req, res) => {
    const { _id}=req.params
    const {text}= req.body
    ToDoModel.findOneAndUpdate(_id, { text })
        .then(() => res.status(201).json("update"))
        .catch((error)=>console.log(error))
    
}