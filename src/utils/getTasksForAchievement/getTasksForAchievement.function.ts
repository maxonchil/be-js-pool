import { Task } from '@models';

import { AchievementsMap, GetTasksForAchievementFn } from '@types';

import { tasks } from '../../data/tasks.json';

export const getTasksForAchievement: GetTasksForAchievementFn = (
	achievementId: number,
): Task[] => {
	const halfLength = Math.ceil(tasks.length/2);
	const achievementsMap: AchievementsMap = {
		1: tasks,
		2: tasks.slice(0, halfLength),
		3: tasks.slice(0, 7),
		4: tasks.slice(0, 5),
		5: tasks.slice(0, 4),
	};

	return achievementsMap[achievementId];
};
