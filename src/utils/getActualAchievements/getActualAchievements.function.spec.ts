import { getActualAchievements } from './getActualAchievements.function';
import { ActualAchievement, Challenge } from '../../models';
import { ChallengeStates } from '../../enums';
import { AchievementsStatusMap } from '../../types';
import { StatusStates } from '../../enums';

let mockedAchievementsStatusMap: AchievementsStatusMap;
let mockedFakeAchievementsStatusMap: AchievementsStatusMap;
let mockedActualAchievements: ActualAchievement[];
let mockedChallenges: Challenge[];

beforeEach(() => {
	mockedAchievementsStatusMap = {
		1 : {
			state: StatusStates.Pending,
			updated: '12/06/2021',
		},
		2 : {
			state: StatusStates.Success,
			updated: '9/06/2021',
		},
	};

	mockedFakeAchievementsStatusMap = {
		3 : {
			state: StatusStates.Pending,
			updated: '12/06/2021',
		},
		4 : {
			state: StatusStates.Success,
			updated: '9/06/2021',
		},
	};

	mockedActualAchievements = [
		{
			id: 1,
			description: "Complete each task 7 days in a row",
			status: {
				state: StatusStates.Pending,
				updated: '12/06/2021',
			},
			image: 'some url',
		},
		{
			id: 2,
			description: "Complete five tasks before 8:00 AM",
			status: {
				state: StatusStates.Success,
				updated: '9/06/2021',
			},
			image: 'some url2',
		},
	];

	mockedChallenges = [
		// Normal challenge
		{
			id: 1,
			state: ChallengeStates.InProgress,
			startDate: '1/06/2021',
			actualAchievements: mockedActualAchievements,
			achievementsStatus: mockedAchievementsStatusMap,
		} as Challenge,
		// Challenge with not real achievements id's in achievementsStatusMap
		{
			id: 2,
			state: ChallengeStates.Success,
			startDate: '1/06/2021',
			actualAchievements: mockedActualAchievements,
			achievementsStatus: mockedFakeAchievementsStatusMap,
		} as Challenge,
		// Completed challenge
		{
			id: 3,
			startDate: '1/06/2021',
			state: ChallengeStates.Success,
			actualAchievements: [] as ActualAchievement[],
		} as Challenge,
		// Not started challenge
		{
			id: 4,
			startDate: '12/06/2021',
			actualAchievements: [] as ActualAchievement[],
		} as Challenge,
	] as Challenge[];
});

describe('#getActualAchievements', () => {
	describe('Valid arguments', () => {
		it('should return actual achievements by challenge id', () => {
			expect(getActualAchievements(1, mockedChallenges)).toEqual(mockedActualAchievements);
		});

		it('should return empty array if no challenge with such id', () => {
			expect(getActualAchievements(900, mockedChallenges)).toEqual([]);
		});

		it('should return empty array if no such actual achievements as in achievementsStatusMap', () => {
			// @ts-ignore
			expect(getActualAchievements(2, mockedFakeAchievementsStatusMap)).toEqual([]);
		});

		it('should return empty array, if no challenge with such id', () => {
			expect(getActualAchievements(192309102931, mockedChallenges)).toEqual([]);
		});
	});

	describe('Corner cases', () => {
		it('should return empty array if challenge is completed', () => {
			expect(getActualAchievements(3, mockedChallenges)).toEqual([]);
		});

		it('should return empty array if challenge not started', () => {
			expect(getActualAchievements(4, mockedChallenges)).toEqual([]);
		});

		it('should return empty array if no achievementsStatus', () => {
			expect(getActualAchievements(4, mockedChallenges)).toEqual([]);
		});
	});
});
