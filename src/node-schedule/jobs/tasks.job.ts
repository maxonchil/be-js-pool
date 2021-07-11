import { Challenge } from '@models';

import { getNewTaskState } from '../utils/getNewTaskStatus.function';

import { calculateAchievementsStatus, getTaskForToday, updateTaskStatusMap } from '../../utils';

import { ChallengeModel } from '../../mongoose';

export const taskJob = async () => {
	const challenges = await ChallengeModel.find();

	challenges.forEach(async (challenge: Challenge) => {
		try {
			const { _id, tasksStatus } = challenge;
			const taskForToday = await getTaskForToday(_id);
			const updatedStatus = getNewTaskState(taskForToday.status.state);
			const updatedTasksStatuses = updateTaskStatusMap(tasksStatus, taskForToday._id, updatedStatus);
			const updatedAchievementsStatuses = await calculateAchievementsStatus(updatedTasksStatuses);
			const patch = {
				tasksStatus: updatedTasksStatuses,
				achievementsStatuses: updatedAchievementsStatuses,
			};

			await ChallengeModel.updateOne({ _id }, patch);
		} catch (error) {
			console.log(' Failed task calculation job', error);
		}
	});
};
