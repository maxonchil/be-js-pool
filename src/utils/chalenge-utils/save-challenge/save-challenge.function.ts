import { ChallengeModel } from '../../../mongoose';

import { Challenge } from '../../../models';

export const saveChallenge = async (challenge: Challenge): Promise<Challenge> => {
	const newChallenge = await new ChallengeModel(challenge);
	await newChallenge.save();
	return newChallenge;
};
