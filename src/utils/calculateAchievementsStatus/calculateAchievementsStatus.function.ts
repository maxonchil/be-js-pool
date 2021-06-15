import { AchievementsStatusMap, CalculateAchievementsStatusFn, TasksStatusMap } from '@types';

import { Achievement, Task } from '@models';
import { getTasksForAchievement } from '../getTasksForAchievement/getTasksForAchievement.function';

import { filterStatusMap } from '../filterStatusMap/filterStatusMap.function';

import { StatusStates } from '../../enums';

export const calculateAchievementsStatus: CalculateAchievementsStatusFn = (
	achievements: Achievement[] = [],
	tasksStatuses: TasksStatusMap = {},
):AchievementsStatusMap => {
	if (!achievements.length || !Object.keys(tasksStatuses).length) return {} as AchievementsStatusMap;

	return achievements.reduce((memo: AchievementsStatusMap, { id, checkComplete }: Achievement) => {
		const tasksEntities: Task[] = getTasksForAchievement(id);
		const targetTasksMap: TasksStatusMap = filterStatusMap<Task>(tasksStatuses, tasksEntities);
		const achievementStatus: StatusStates = checkComplete(targetTasksMap);

		memo[id] = {
			state: achievementStatus,
			updated: new Date().toLocaleDateString(),
		};
		return memo;
	}, {});
};

