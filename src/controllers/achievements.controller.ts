import { Request, Response } from 'express';
import { getChallengeData } from '../utils';

import { ActualAchievement } from '@models';

export class AchievementsController {
	async getActualAchievements(req: Request, res: Response) {
		try {
			const { challengeId } = req.query;
			const actualAchievements = await getChallengeData<ActualAchievement>(challengeId, 'actualAchievements');

			res.json({ actualAchievements });
		} catch (error) {
			console.log('Error while trying to get actual achievements', error);
			res.json({ error });
		}
	}
}
