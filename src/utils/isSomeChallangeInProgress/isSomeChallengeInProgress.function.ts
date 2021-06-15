import { Challenge } from '@models';
import { ChallengeStates } from '../../enums';
import { IsSomeChallengeInProgressFn } from '@types';

export const isSomeChallengeInProgress: IsSomeChallengeInProgressFn = (
	challanges: Challenge[] = [],
): boolean => challanges.some(({ state }: Challenge) => state === ChallengeStates.InProgress);
