import { GetCurrentChallengeDayFn } from '@types';

const secondsInDay = 86_400_000;

export const getCurrentChallengeDay: GetCurrentChallengeDayFn = (
	startDate: string,
): number => {
	const startTime = new Date(startDate).getTime();
	const currentTime = new Date().getTime();
	return Math.abs(Math.floor((startTime - currentTime) / secondsInDay));
};
