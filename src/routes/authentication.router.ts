import { Router } from 'express';

import { AuthenticationController } from '../controllers/auth.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

export const router = Router();
const authenticationRouter = new AuthenticationController();

router.post('/signup', authMiddleware('signup'), authenticationRouter.signup);
router.post('/login', authMiddleware('login'), authenticationRouter.login);
