import { isSomeChallengeInProgress } from '../isSomeChallangeInProgress/isSomeChallengeInProgress.function';

import { AchievementsStatusMap, StartNewChallengeFn, TasksStatusMap } from '@types';

import { Challenge, Task } from '@models';
import { ChallengeStates } from '../../enums';
import { shuffle } from 'lodash';

import { buildActualAchievements } from '../buildActualAchievements/buildActualAchievements.function';
import { buildStatusMap } from '../getStatusMap/getStatusMap.function';

const defaultChallengeDuration = 30;

export const startNewChallenge: StartNewChallengeFn = (
	tasks: Task[] = [],
	challenges: Challenge[] = [],
	duration = 30,
	achievementsCount: number = duration / 6,
): Challenge => {
	const isInvalidValue = !Array.isArray(tasks) || !tasks.length || !Array.isArray(challenges);
	if (isInvalidValue || isSomeChallengeInProgress(challenges)) return {} as Challenge;
	const challengesIds = challenges
		.map((challenge: Challenge) => challenge?.id)
		.filter((id: number | undefined) => !!id);
	const id = challengesIds.length ? Math.max(...challengesIds) + 1 : 1;
	const tasksOrder = shuffle(tasks);
	const validDuration = duration || defaultChallengeDuration;
	const actualAchievements = buildActualAchievements(validDuration, achievementsCount);
	const tasksStatus: TasksStatusMap = <TasksStatusMap>buildStatusMap(tasksOrder);
	const achievementsStatus: AchievementsStatusMap = <AchievementsStatusMap>buildStatusMap(actualAchievements);

	return {
		id,
		state: ChallengeStates.InProgress,
		startDate: new Date().toLocaleDateString(),
		duration: validDuration,
		tasksOrder,
		tasksStatus,
		actualAchievements,
		archiveItems: [],
		achievementsStatus,
	};
};


