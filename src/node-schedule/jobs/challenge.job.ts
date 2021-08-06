import { Challenge } from '@models';

import { calculateAchievementsStatus, getCurrentChallengeDay } from '../../utils';

import { calculateChallengeState } from '../utils/calculateChallengeState.function';

import { ChallengeModel } from '../../mongoose';

export const challengeJob = async () => {
	try {
		const challenges = await ChallengeModel.find();

		challenges.forEach(async (challenge: Challenge) => {
			const { _id, duration, startDate, tasksStatus } = challenge;
			const isLastChallengeDay = getCurrentChallengeDay(startDate) === duration;

			if (!isLastChallengeDay) return;

			const achievementsStatuses = calculateAchievementsStatus(tasksStatus);
			const updatedChallengeState = calculateChallengeState(challenge);
			const patch = {
				achievementsStatuses,
				state: updatedChallengeState,
			};

			await ChallengeModel.updateOne({ _id }, patch);
		});
	} catch (error) {
		console.log('Failed update achivements statuses', error);
	}
};
