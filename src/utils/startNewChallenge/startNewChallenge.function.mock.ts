import { ActualAchievement, Task } from '@models';

import { StatusStates } from '../../enums';

import { AchievementsStatusMap, TasksStatusMap } from '@types';

export const mockedTasks: Task[] = [
	{
		id: 3,
		description: 'Some description 3',
	},
	{
		id: 4,
		description: 'Some description 3',
	},
	{
		id: 1,
		description: 'Some description 1',
	},
	{
		id: 2,
		description: 'Some description 2',
	},
];

export const mockedTasksStatus: TasksStatusMap = {
	1: {
		state: StatusStates.Pending,
		updated: new Date().toLocaleDateString(),
	},
	2: {
		state: StatusStates.Pending,
		updated: new Date().toLocaleDateString(),
	},
	3: {
		state: StatusStates.Pending,
		updated: new Date().toLocaleDateString(),
	},
	4: {
		state: StatusStates.Pending,
		updated: new Date().toLocaleDateString(),
	},
};

export const mockedActualAchievements: ActualAchievement[] = [
	{
		id: 1,
		description: 'Complete all tasks',
		status: {
			state: StatusStates.Pending,
			updated: new Date().toLocaleDateString(),
		},
		image: 'mockUrl',
	},
	{
		id: 2,
		description: 'Complete half of the tasks',
		status: {
			state: StatusStates.Pending,
			updated: new Date().toLocaleDateString(),
		},
		image: 'mockUrl',
	},
	{
		id: 3,
		description: 'Complete each task 7 days in a row',
		status: {
			state: StatusStates.Pending,
			updated: new Date().toLocaleDateString(),
		},
		image: 'mockUrl',
	},
	{
		id: 4,
		description: 'Complete five tasks before 8:00 AM',
		status: {
			state: StatusStates.Pending,
			updated: new Date().toLocaleDateString(),
		},
		image: 'mockUrl',
	},
	{
		id: 5,
		description: 'Complete 4 Monday\'s tasks',
		status: {
			state: StatusStates.Pending,
			updated: new Date().toLocaleDateString(),
		},
		image: 'mockUrl',
	},
];

export const mockedAchievementStatus: AchievementsStatusMap = {
	1: {
		state: StatusStates.Pending,
		updated: new Date().toLocaleDateString(),
	},
	2: {
		state: StatusStates.Pending,
		updated: new Date().toLocaleDateString(),
	},
	3: {
		state: StatusStates.Pending,
		updated: new Date().toLocaleDateString(),
	},
	4: {
		state: StatusStates.Pending,
		updated: new Date().toLocaleDateString(),
	},
	5: {
		state: StatusStates.Pending,
		updated: new Date().toLocaleDateString(),
	},
};
