import { Router } from 'express';

import { TasksController } from '../controllers/tasks.controller';

export const router = Router();
const tasksController = new TasksController();

router.get('/', tasksController.getTasksForToday);
router.get('/archive', tasksController.getTasksArchive);
