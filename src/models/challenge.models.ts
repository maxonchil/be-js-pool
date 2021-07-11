import { ChallengeStates } from '@enums';

import { AchievementsStatusMap, TasksStatusMap } from '@types';
import { ActualAchievement } from './achievements.models';

import { ArchiveItem, Task } from './tasks.models';

/**
 * Challenge describes a 30-days period, during which randomly chosen
 * 30 tasks and 5 achievements are assigned for the user.
 * @category Interfaces
 */
export interface Challenge {
	_id?: string,
	state: ChallengeStates;
	startDate: string;
	duration: number,
	tasksOrder: Task[];
	tasksStatus: TasksStatusMap;
	actualAchievements: ActualAchievement[];
	archiveItems: ArchiveItem[];
	achievementsStatus: AchievementsStatusMap;
	createdBy?: string;
}
