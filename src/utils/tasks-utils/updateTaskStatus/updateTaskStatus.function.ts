import { StatusStates } from '@enums';

import { TasksStatusMap } from '@types';

import { Status } from '@models';

export const updateTaskStatusMap = (
	tasksStatus: TasksStatusMap,
	taskId: string,
	newTaskState: StatusStates,
): TasksStatusMap => Object.entries(tasksStatus).reduce((memo, [id, status]: [string, Status]) => {
		const isTargetStatus = taskId === id;
		const { updated: presetUpdated, state: presetState } = status;
		memo[id] = {
			updated: isTargetStatus ? new Date().toLocaleDateString(): presetUpdated,
			state: isTargetStatus ? newTaskState: presetState,
		};
		return memo;
	}, {});
