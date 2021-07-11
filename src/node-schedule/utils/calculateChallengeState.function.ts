import { Challenge, Status } from '@models';
import { ChallengeStates, StatusStates } from '../../enums';

export const calculateChallengeState = (challenge: Challenge): ChallengeStates => {
	const isAllTasksCompleted = Object.values(challenge.tasksStatus)
		.every((status: Status) => status.state === StatusStates.Success);

	return isAllTasksCompleted ? ChallengeStates.Success : ChallengeStates.Failure;
};
