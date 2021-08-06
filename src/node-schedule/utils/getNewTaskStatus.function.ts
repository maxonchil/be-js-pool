import { StatusStates } from '../../enums';

export const getNewTaskState = (taskState: StatusStates): StatusStates =>
	taskState === StatusStates.Success
			? StatusStates.Success
			: StatusStates.Failure;
