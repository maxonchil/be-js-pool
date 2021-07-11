import { GetChallengeDataFn } from '../../../types';

import { Challenge } from '../../../models';

import { ChallengeModel } from '../../../mongoose';

export const getChallengeData: GetChallengeDataFn = async<T>(
	challengeId: string,
	field: keyof Challenge,
): Promise<T[]> => {
	if (!field) return;
	const targetChallenge = await ChallengeModel.findOne({ _id: challengeId });
	return targetChallenge?.[field] ?? [];
};
