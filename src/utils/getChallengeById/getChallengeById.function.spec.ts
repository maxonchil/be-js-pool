import { Challenge } from '../../models';
import { ChallengeStates } from '../../enums';
import { getChallengeById } from './getChallengeById.function';

let mockedChallenges: Challenge[];

beforeEach(() => {
	mockedChallenges = [
		// Normal challenge
		{
			id: 1,
			state: ChallengeStates.InProgress,
			startDate: '1/06/2021',
		} as Challenge,
		{
			id: 2,
			state: ChallengeStates.Success,
			startDate: '1/06/2021',
		} as Challenge,
		{
			id: 2,
			state: ChallengeStates.Success,
			startDate: '1/06/2021',
		} as Challenge,
	];
})

describe('#getChallengeById', () => {
	describe('Valid arguments', () => {
		it('should return challenge by "by id" if such exists', () => {
			expect(getChallengeById(1, mockedChallenges)).toEqual(mockedChallenges[0]);
		});

		it('should return empty array, in challenge with such id not exist', () => {
			expect(getChallengeById(900, mockedChallenges)).toEqual({});
		});
	});

	describe('Corner cases', () => {
		it('should return one challenge, if there are few with same id', () => {
			expect(getChallengeById(1, mockedChallenges)).toEqual(mockedChallenges[0]);
		});
	});
});
