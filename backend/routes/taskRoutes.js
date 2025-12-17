import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

// @route   GET /api/tasks
// @desc    Get all tasks
// @access  Public
router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks
    });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/tasks
// @desc    Create a new task
// @access  Public
router.post('/', async (req, res, next) => {
  try {
    const { title } = req.body;

    // Validation
    if (!title || title.trim().length === 0) {
      res.status(400);
      throw new Error('Task title is required and cannot be empty');
    }

    if (title.length > 200) {
      res.status(400);
      throw new Error('Task title cannot exceed 200 characters');
    }

    const task = await Task.create({ title: title.trim() });
    
    res.status(201).json({
      success: true,
      data: task
    });
  } catch (error) {
    next(error);
  }
});

// @route   DELETE /api/tasks/:id
// @desc    Delete a task
// @access  Public
router.delete('/:id', async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      res.status(404);
      throw new Error('Task not found');
    }

    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Task deleted successfully',
      data: {}
    });
  } catch (error) {
    next(error);
  }
});

export default router;