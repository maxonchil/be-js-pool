import { isSomeChallengeInProgress } from './isSomeChallengeInProgress.function';
import { Challenge } from '../../models';
import { ChallengeStates } from '../../enums';

let mockedProgressChallenges: Challenge[];
let mockedFinishedChallenges: Challenge[];

beforeEach(() => {
	mockedProgressChallenges = [
		{
			id: 1,
			state: ChallengeStates.InProgress,
		} as Challenge,
	];

	mockedFinishedChallenges = [
		{
			id: 1,
			state: ChallengeStates.InProgress,
		} as Challenge,
	];
});

describe('#isSomeChallangeInProgress', () => {
	describe('Valid arguments', () => {
		it('should return true if some of passed challenges in progress', () => {
			expect(isSomeChallengeInProgress(mockedProgressChallenges)).toBeTruthy();
		});

		it('should return true if no one of passed challenges in progress', () => {
			expect(isSomeChallengeInProgress(mockedFinishedChallenges)).toBeTruthy();
		});

		it('should return false if no passed challenges', () => {
			expect(isSomeChallengeInProgress([])).toBeFalsy();
		});
	});
});
