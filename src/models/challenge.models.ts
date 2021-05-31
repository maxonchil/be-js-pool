import { States } from '@enums';
import { Task } from '@models';

import { AchievementsStatusMap, TasksStatusMap } from '@types';

/**
 * Challenge describes a 30-days period, during which randomly chosen
 * 30 tasks and 5 achievements are assigned for the user.
 * @category Interfaces
 */
export interface Challenge {
	id: string;
	state: States;
	startDate: Date;
	tasksOrder: Task[];
	tasksStatus: TasksStatusMap;
	achievementsStatus: AchievementsStatusMap;
}
