import { ActualAchievement, Challenge } from '@models';
import { GetActualAchievementsFn } from '@types';
import { getChallengeById } from '../getChallengeById/getChallengeById.function';

export const getActualAchievements: GetActualAchievementsFn = (
	challengeId: number,
	challenges: Challenge[] = [],
): ActualAchievement[] => {
	const targetChallenge = getChallengeById(challengeId, challenges);
	return targetChallenge?.actualAchievements ?? [];
};
