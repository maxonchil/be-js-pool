import { AchievementsStatusMap, StartNewChallengeFn, TasksStatusMap } from '@types';

import { Challenge, Task } from '@models';
import { ChallengeStates } from '../../../enums';
import lodash from 'lodash';

import { buildActualAchievements } from '../../buildActualAchievements/buildActualAchievements.function';
import { buildStatusMap } from '../../getStatusMap/getStatusMap.function';

const defaultChallengeDuration = 30;
const { shuffle } = lodash;

export const startNewChallenge: StartNewChallengeFn = async (
	tasks: Task[] = [],
	duration = 30,
	achievementsCount: number = duration / 6,
	creatorId: string,
): Promise<Challenge> => {
	if (!Array.isArray(tasks) || !tasks.length) return {} as Challenge;
	const tasksOrder = shuffle(tasks);
	const validDuration = duration || defaultChallengeDuration;
	const actualAchievements = await buildActualAchievements(validDuration, achievementsCount);
	const tasksStatus: TasksStatusMap = <TasksStatusMap>buildStatusMap(tasksOrder);
	const achievementsStatus: AchievementsStatusMap = <AchievementsStatusMap>buildStatusMap(actualAchievements);

	return {
		state: ChallengeStates.InProgress,
		startDate: new Date().toLocaleDateString(),
		duration: validDuration,
		tasksOrder,
		tasksStatus,
		actualAchievements,
		archiveItems: [],
		achievementsStatus,
		createdBy: creatorId,
	};
};


