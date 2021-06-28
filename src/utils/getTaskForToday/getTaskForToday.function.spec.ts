import { getTaskForToday } from './getTaskForToday.function';
import { Challenge, Status, Task, TaskForToday } from '../../models';
import { ChallengeStates } from '../../enums/challenge-state.enum';
import { StatusStates } from '../../enums';

let mockedTaskStatus: Status;
let mockedTask: Task;
let mockedTaskForToday: TaskForToday;
let mockedChallenges: Challenge[];

beforeEach(() => {
	mockedTaskStatus = {
		state: StatusStates.Pending,
		updated: new Date().toLocaleDateString(),
	};

	mockedTask = {
		id: 3,
		description: 'Some description here',
	};

	mockedTaskForToday = {
		id: 3,
		description: 'Some description here',
		status: mockedTaskStatus,
	};

	mockedChallenges= [
		// Normal challenge
		{
			id: 1,
			state: ChallengeStates.InProgress,
			startDate: new Date().toLocaleDateString(),
			tasksOrder: [mockedTask],
		} as Challenge,
		// Completed challenge
		{
			id: 2,
			state: ChallengeStates.Success,
			startDate: new Date('06/01/2021').toLocaleDateString(),
			tasksOrder: [mockedTask],
		} as Challenge,
		// Not started challenge
		{
			id: 3,
			startDate: '3/06/2021',
			tasksOrder: [mockedTask],
		} as Challenge,
		// 2 days ago challenge
		{
			id: 4,
			state: ChallengeStates.InProgress,
			startDate: new Date().toLocaleDateString(),
			tasksOrder: [mockedTask],
		} as Challenge,
	] as Challenge[];
});

describe('#getTaskForToday', () => {
	describe('Valid arguments', () => {
		it('should return task for today if today is a first day of challenge', () => {
			expect(getTaskForToday(1, mockedChallenges)).toEqual(mockedTaskForToday);
		});

		it('should return task for today, if today is 2nd day of challenge', () => {
			expect(getTaskForToday(4, mockedChallenges)).toEqual(mockedTaskForToday);
		});

		it('should return empty object, if no challenge with such id', () => {
			expect(getTaskForToday(192309102931, mockedChallenges)).toEqual({});
		});
	});

	describe('Corner cases', () => {
		it('should return empty object if challenge is completed', () => {
			expect(getTaskForToday(2, mockedChallenges)).toEqual({});
		});

		it('should return empty object if challenge not started', () => {
			expect(getTaskForToday(3, mockedChallenges)).toEqual({});
		});
	});
});
