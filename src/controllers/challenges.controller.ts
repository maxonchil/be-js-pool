import { Request, Response } from 'express';
import { saveChallenge, saveTasks, startNewChallenge } from '../utils';

import { ChallengeModel } from '../mongoose';

import { ChallengeStates } from '../enums';

import { Challenge, Task } from '@models';


export class ChallengesController {
	async create(req: Request, res: Response) {
		const { id } = req.user;
		const { tasks = [], duration, achievementsCount } = req.body;

		saveTasks(tasks)
			.then((tasks: Task[]) => startNewChallenge(tasks, duration, achievementsCount, id))
			.then((challenge: Challenge) => saveChallenge(challenge))
			.then((challenge: Challenge) => res.json({ challengeId: challenge._id }))
			.catch((error) => {
				console.log('Error while trying to create challenge', error);
				res.json({ error });
			});
	}

	async getCurrent(req: Request, res: Response) {
		try {
			const { id } = req.user;
			const currentChallenge = await ChallengeModel.findOne((
				{
					createdBy: id,
					state: ChallengeStates.InProgress,
				}
			));
			const response = currentChallenge ? { challengeId: currentChallenge.id } : null;

			res.json(response);
		} catch (error) {
			console.log('Error while trying to get current challenge', error);
			res.json({ error });
		}
	}
}
