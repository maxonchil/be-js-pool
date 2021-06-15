import { GetTaskArchiveFn } from '@types';

import { ArchiveItem, Challenge } from '@models';
import { getChallengeById } from '../getChallengeById/getChallengeById.function';

export const getTaskArchive: GetTaskArchiveFn = (
	challengeId: number,
	challenges: Challenge[] = [],
): ArchiveItem[] => {
	const targetChallenge = getChallengeById(challengeId, challenges);
	return targetChallenge?.archiveItems ?? [];
};
