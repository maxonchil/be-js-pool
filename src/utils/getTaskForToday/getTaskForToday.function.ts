import { GetTaskForTodayFn } from '@types';

import { Challenge, TaskForToday } from '@models';
import { getChallengeById } from '../getChallengeById/getChallengeById.function';

import { StatusStates } from '../../enums';
import { getCurrentChallengeDay } from '../getCurrentChallengeDay/getCurrentChallengeDay.function';

export const getTaskForToday: GetTaskForTodayFn = (
	challengeId: number,
	challenges: Challenge[] = [],
): TaskForToday => {
	const targetChallenge = getChallengeById(challengeId, challenges);
	const currentChallengeDay = getCurrentChallengeDay(targetChallenge.startDate);
	const targetTask = targetChallenge?.tasksOrder?.find((_, i) => i + 1 === currentChallengeDay);
	if (!targetTask) return {} as TaskForToday;

	return {
		...targetTask,
		status: {
			state: StatusStates.Pending,
			updated: new Date().toLocaleDateString(),
		},
	};
};
