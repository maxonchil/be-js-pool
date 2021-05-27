import { States } from '../enums/statuses.enum';
import { Task } from './tasks.models';

import { AchievementsStatusMap, TasksStatusMap } from '../types/maps.types';

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
	tasksStatus: AchievementsStatusMap;
	achievementsStatus: TasksStatusMap;
}
