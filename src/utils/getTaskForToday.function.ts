import { GetTaskForTodayFn } from '@types';

import { Challenge, TaskForToday } from '@models';
import { States } from '../enums/states.enum';

export const getTaskForToday: GetTaskForTodayFn = (
	challengeId: number,
	challenges: Challenge[] = [],
) => {
	const fallBackItem = {} as TaskForToday;
	if (!challengeId || !challenges.length) return fallBackItem;
	const targetChallenge = challenges.find((challenge) => challenge?.id === challengeId);
	const isInactive = targetChallenge?.state !== States.InProgress;
	if (!targetChallenge || isInactive) return fallBackItem;
	const todayDate = new Date().toLocaleDateString();
	const taskForToday = targetChallenge.tasksOrder[todayDate];
	return taskForToday || fallBackItem;
};
