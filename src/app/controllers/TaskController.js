import * as Yup from 'yup';
import Task from '../models/Task';
import User from '../models/User';

class TaskController {
  async index(req, res) {
    const tasks = await Task.findAll({
      where: { user_id: req.userId, canceled_at: null },
    });

    return res.json(tasks);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      user_id: Yup.number().required(),
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { user_id, description } = req.body;

    const isUser = await User.findOne({
      where: { id: user_id },
    });

    if (!isUser) {
      return res
        .status(401)
        .json({ error: 'You can only create tasks with users' });
    }

    const task = await Task.create({
      user_id: req.userId,
      description,
    });

    return res.json(task);
  }

  async update(req, res) {
    const { id } = req.params;
    const { user_id, description } = req.body;

    const task = await Task.findOne({
      where: { id, user_id: req.userId, canceled_at: null },
    });

    if (!task) {
      return res.status(404).json({ error: 'This is not edit.' });
    }

    if (description) {
      task.description = description;
    }

    task.save();

    return res.json({ user_id, description });
  }

  async delete(req, res) {
    const { id } = req.params;

    const task = await Task.findOne({
      where: { id, user_id: req.userId, canceled_at: null },
    });

    if (!task) {
      return res.status(404).json({ error: "There's no task with this id." });
    }

    task.destroy();

    return res.json({ success: 'Task deleted!' });
  }
}

export default new TaskController();
