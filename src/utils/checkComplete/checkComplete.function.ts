import { CheckCompleteFn, TasksStatusMap } from '@types';
import { StatusStates } from '../../enums';

import { Status } from '@models';


export const checkComplete:CheckCompleteFn = (
	tasksStatus: TasksStatusMap = {},
): StatusStates => {
	const keys = Object.keys(tasksStatus);
	const values = Object.values(tasksStatus);
	if (!keys.length || !values.length) return {} as StatusStates;
	const isFail = values.some((status: Status) => status.state === StatusStates.Failure);
	if (isFail) return StatusStates.Failure;
	const isPending: boolean = values.some((status: Status) => status.state === StatusStates.Pending);

	return isPending
		? StatusStates.Pending
		: StatusStates.Success;
};
