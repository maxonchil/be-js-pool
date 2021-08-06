import { Router } from 'express';

import { ChallengesController } from '../controllers/challenges.controller';

export const router = Router();
const challengesController = new ChallengesController();

router.post('/create', challengesController.create);
router.get('/current', challengesController.getCurrent);
