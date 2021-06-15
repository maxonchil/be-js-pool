import { GetChallengeByIdFn } from '@types';

import { Challenge } from '@models';

import { ChallengeStates } from '../../enums/challenge-state.enum';

export const getChallengeById: GetChallengeByIdFn = (
	challengeId: number,
	challenges: Challenge[] = [],
): Challenge => {
	if (!challengeId || !challenges.length || !Array.isArray(challenges)) return {} as Challenge;
	const targetChallenge = challenges.find((challenge) => challenge?.id === challengeId);
	const isInactive = targetChallenge?.state !== ChallengeStates.InProgress;
	if (!targetChallenge || isInactive) return {} as Challenge;
	return targetChallenge;
};
