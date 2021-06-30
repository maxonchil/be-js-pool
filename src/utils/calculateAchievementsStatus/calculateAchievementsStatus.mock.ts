import { Achievement, Status } from '@models';
import { checkComplete } from '../checkComplete/checkComplete.function';

import { AchievementsStatusMap, TasksStatusMap } from '@types';

import { StatusStates } from '../../enums';

export const successStatus: Status = {
	state: StatusStates.Success,
	updated: new Date().toLocaleDateString(),
};

export const pendingStatus: Status = {
	state: StatusStates.Pending,
	updated: new Date().toLocaleDateString(),
};

export const failStatus: Status = {
	state: StatusStates.Failure,
	updated: new Date().toLocaleDateString(),
};

export const mockedAchievements: Achievement[] = [
	{
		id: 1,
		description: 'Complete half of the tasks',
		icon: 'icon url',
		checkComplete: checkComplete,
	},
	{
		id: 2,
		description: 'Complete All tasks',
		icon: 'icon url',
		checkComplete: checkComplete,
	},
];

export const mockedTasksStatusMap: TasksStatusMap = {
	1: pendingStatus,
	3: successStatus,
	2: pendingStatus,
};

export const mockedSuccessTasksStatusMap: TasksStatusMap = {
	1: successStatus,
	2: successStatus,
	3: successStatus,
};

export const mockedFailTasksStatusMap: TasksStatusMap = {
	1: successStatus,
	2: failStatus,
};

export const mockedAchievementsStatusMap: AchievementsStatusMap = {
	1: pendingStatus,
	2: pendingStatus,
};

