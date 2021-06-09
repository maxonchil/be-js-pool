import { States } from '@enums';

import { AchievementsStatusMap, TaskOrderMap, TasksStatusMap } from '@types';

/**
 * Challenge describes a 30-days period, during which randomly chosen
 * 30 tasks and 5 achievements are assigned for the user.
 * @category Interfaces
 */
export interface Challenge {
	id: number;
	state: States;
	startDate: string;
	tasksOrder: TaskOrderMap;
	tasksStatus: TasksStatusMap;
	achievementsStatus: AchievementsStatusMap;
}
