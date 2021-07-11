import { Achievement, Task } from '@models';

import { GetTasksForAchievementFn } from '@types';

import { TaskModel } from '../../../mongoose';

import { getALlAchievements } from '../../achievements-utils';

export const getTasksForAchievement: GetTasksForAchievementFn = async (
	achievementId: string,
): Promise<Task[]> => {
	const tasks = await TaskModel.find();
	const achievements = await getALlAchievements();

	const halfLength = Math.ceil(tasks.length/2);
	const achievementsMap = achievements.reduce((memo, { _id }: Achievement, i: number) => {
		if (i === 0) { memo[_id] = tasks; }
		if (i === 1) { memo[_id] = tasks.slice(0, halfLength); }
		if (i > 1) { memo[_id] = tasks.slice(0, halfLength - i - 1); }
		return memo;
	}, {});

	return achievementsMap[achievementId];
};
