import { Router } from 'express';

import { AchievementsController } from '../controllers/achievements.controller';

export const router = Router();
const achievementsController = new AchievementsController();

router.get('/', achievementsController.getActualAchievements);
