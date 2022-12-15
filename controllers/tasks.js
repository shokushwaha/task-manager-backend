const Task = require('../models/tasks')


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ msg: { tasks } });
    } catch (error) {

        res.status(500).json({ msg: error });
    }
}


const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ msg: { task } });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}


const getTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findOne({ _id: id });
        if (!task)
            return res.status(404).json({ msg: `No task with id : ${id} found` });
        res.status(200).json({ msg: { task } });
    } catch (error) {
        res.json({ msg: error });
    }
}



const updateTask = (req, res) => {
    try {
        const id = req.params.id;
        const task = Task.findOneAndUpdate({ _id: id }, req.body, {
            new: true,
            runValidators: true
        });
        if (!task)
            return res.status(404).json({ msg: `No task with id : ${id} found` });

        res.status(200).json({ msg: `` })
    } catch (error) {
        res.json({ msg: error });
    }
}



const deleteTask = async (req, res) => {

    try {
        const id = req.params.id;
        const task = await Task.findOneAndDelete({ _id: id });
        if (!task)
            return res.status(404).json({ msg: `no task with id ${id} found` });

        res.status(200).json({ msg: "task deleted" });

    } catch (error) {
        res.json({ msg: error });
    }

}
module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };