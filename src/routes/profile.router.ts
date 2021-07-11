import { Router } from 'express';

import { ProfileController } from '../controllers/profile.controller';

export const router = Router();
const profileController = new ProfileController();

router.get('/', profileController.getUser);
