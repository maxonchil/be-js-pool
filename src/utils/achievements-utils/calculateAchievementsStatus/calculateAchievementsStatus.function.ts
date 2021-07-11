import { AchievementsStatusMap, CalculateAchievementsStatusFn, TasksStatusMap } from '@types';

import { Achievement, Task } from '@models';
import { getTasksForAchievement } from '../../tasks-utils';

import { filterStatusMap } from '../../filterStatusMap/filterStatusMap.function';

import { StatusStates } from '../../../enums';

import { getALlAchievements } from '../getAllAchievements/get-all-achievements.function';

export const calculateAchievementsStatus: CalculateAchievementsStatusFn = async (
	tasksStatuses: TasksStatusMap = {},
):Promise<AchievementsStatusMap> => {
	const achievements = await getALlAchievements();
	if (!achievements.length || !Object.keys(tasksStatuses).length) return {} as AchievementsStatusMap;

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return achievements.reduce(async (memo: AchievementsStatusMap, { _id, checkComplete }: Achievement) => {
		const tasksEntities: Task[] = await getTasksForAchievement(_id);
		const targetTasksMap: TasksStatusMap = filterStatusMap<Task>(tasksStatuses, tasksEntities);
		const achievementStatus: StatusStates = checkComplete(targetTasksMap);

		memo[_id] = {
			state: achievementStatus,
			updated: new Date().toLocaleDateString(),
		};
		return memo;
	}, {});
};

