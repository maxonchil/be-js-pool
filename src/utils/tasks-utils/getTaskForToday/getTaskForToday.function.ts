import { GetTaskForTodayFn } from '@types';

import { TaskForToday } from '@models';

import { StatusStates } from '../../../enums';
import { getCurrentChallengeDay } from '../../chalenge-utils/';

import { ChallengeModel } from '../../../mongoose';

export const getTaskForToday: GetTaskForTodayFn = async (
	challengeId: string,
): Promise<TaskForToday> => {
	const { startDate, tasksOrder = [] } = await ChallengeModel.findOne({ _id: challengeId });
	const currentChallengeDay = await getCurrentChallengeDay(startDate);
	const targetTask = tasksOrder?.find((_, i) => i + 1 === currentChallengeDay);
	if (!targetTask) return {} as TaskForToday;

	return {
		_id: targetTask._id,
		description: targetTask.description,
		status: {
			state: StatusStates.Pending,
			updated: new Date().toLocaleDateString(),
		},
	};
};
