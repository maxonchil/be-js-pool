import { States } from '../enums/statuses.enum';
import { Task } from './tasks.models';

import { AchievementsStatusMap, TasksStatusMap } from '../types/maps.types';

export interface Challenge {
	id: string;
	state: States;
	startDate: Date;
	tasksOrder: Task[];
	tasksStatus: AchievementsStatusMap;
	achievementsStatus: TasksStatusMap;
}
