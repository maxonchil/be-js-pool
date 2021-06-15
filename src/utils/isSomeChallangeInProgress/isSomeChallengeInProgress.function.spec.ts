import { isSomeChallengeInProgress } from './isSomeChallengeInProgress.function';
import { Challenge } from '../../models';
import { ChallengeStates } from '../../enums';

const mockedProgressChallenges: Challenge[] = [
	{
		id: 1,
		state: ChallengeStates.InProgress,
	} as Challenge,
];

const mockedFinishedChallenges: Challenge[] = [
	{
		id: 1,
		state: ChallengeStates.InProgress,
	} as Challenge,
];

describe('#isSomeChallangeInProgress', () => {
	describe('Main logic', () => {
		it('should return true if some of passed challenges in progress', () => {
			expect(isSomeChallengeInProgress(mockedProgressChallenges)).toBeTruthy();
		});

		it('should return false if no one of passed challenges in progress', () => {
			expect(isSomeChallengeInProgress(mockedFinishedChallenges)).toBeTruthy();
		});

		it('should return false if no passed challenges', () => {
			expect(isSomeChallengeInProgress([])).toBeFalsy();
		});
	});
});
