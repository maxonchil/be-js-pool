import cors from 'cors';
import express from 'express';

import './src/auth';

import { router as challengesRouter } from './src/routes/challenges.router';
import { router as tasksRouter } from './src/routes/tasks.router';

import { router as authenticationRouter } from './src/routes/authentication.router';

import { router as achievementsRouter } from './src/routes/achievements.router';
import { router as profileRouter } from './src/routes/profile.router';

import { Routes } from './src/enums/routes.enum';

import { connectDB, setupServer, setupSocketConnection } from './src/server/server.index';
import { authMiddleware } from './src/middlewares/auth.middleware';

const app = express();

// Setup project
connectDB()
	.then(() => setupServer(app))
	.then((httpServer) => setupSocketConnection(httpServer))
	.catch((error) => console.log('Error while setup serve', error));

// General middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(Routes.Challenges, authMiddleware('jwt'), challengesRouter);
app.use(Routes.Tasks, authMiddleware('jwt'), tasksRouter);
app.use(Routes.Achievements, authMiddleware('jwt'), achievementsRouter);
app.use(Routes.Authentication, authenticationRouter);
app.use(Routes.Profile, authMiddleware('jwt'), profileRouter);


