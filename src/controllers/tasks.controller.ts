import { Request, Response } from 'express';
import { getChallengeData, getTaskForToday } from '../utils';

import { ArchiveItem } from '@models';

export class TasksController {
	async getTasksForToday(req: Request, res: Response) {
		try {
			const { challengeId } = req.query;
			const tasksForToday = await getTaskForToday(challengeId);
			res.json({ tasksForToday });
		} catch (error) {
			res.json({ error });
		}
	}

	async getTasksArchive(req: Request, res: Response) {
		try {
			const { id: challengeId } = req.query;
			const tasksArchive = await getChallengeData<ArchiveItem>(challengeId, 'archiveItems');
			res.json({ tasksArchive });
		} catch (error) {
			console.log('Error while trying to get task archive');
			res.json({ error });
		}
	}
}
