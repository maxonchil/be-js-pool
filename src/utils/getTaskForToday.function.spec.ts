import { getTaskForToday } from './getTaskForToday.function';
import { Challenge, Status, TaskForToday } from '../models';
import { States } from '../enums/states.enum';

const currentDate: string = new Date().toLocaleDateString();

const mockedTaskStatus: Status = {
	state: States.InProgress,
	updated: new Date(),
};

const mockedCompletedTaskStatus: Status = {
	state: States.Success,
	updated: new Date('9/06/2021'),
};

const mockedTaskForToday: TaskForToday = {
	id: 2,
	description: 'Some description',
	status: mockedTaskStatus,
};

const mockedTaskTwoDayAgo: TaskForToday = {
	id: 1,
	description: 'Some description of second task',
	status: mockedCompletedTaskStatus,
};

const mockedChallenges: Challenge[] = [
	// Normal challenge
	{
		id: 1,
		state: States.InProgress,
		startDate: currentDate,
		tasksOrder: {
			[currentDate]: mockedTaskForToday,
		},
	} as Challenge,
	// Completed challenge
	{
		id: 2,
		state: States.Success,
		startDate: '1/06/2021',
		tasksOrder: {
			['5/06/2021' as string]: mockedTaskForToday,
		},
	} as Challenge,
	// Not started challenge
	{
		id: 3,
		startDate: '3/06/2021',
		tasksOrder: {
			['2/06/2021' as string]: mockedTaskForToday,
		},
	} as Challenge,
	// 2 days ago challenge
	{
		id: 4,
		state: States.InProgress,
		startDate: currentDate,
		tasksOrder: {
			['8/06/2021' as string]: mockedTaskTwoDayAgo,
			[currentDate]: mockedTaskForToday,
		},
	} as Challenge,
] as Challenge[];

describe('#getTaskForToday', () => {
	describe('Arguments', () => {
		it('should return empty object, if no challenge id passed', () => {
			// @ts-ignore
			expect(getTaskForToday(undefined, mockedChallenges)).toEqual({});
		});

		it('should return empty object, if no challenges array passed', () => {
			expect(getTaskForToday(1)).toEqual({});
		});

		it('should return empty object, if no challenge with such id', () => {
			expect(getTaskForToday(192309102931, mockedChallenges)).toEqual({});
		});

		it('should return empty object if passed value is a string', () => {
			// @ts-ignore
			expect(getTaskForToday('string', mockedChallenges)).toEqual({});
		});

		it('should return empty object if passed value is an array', () => {
			// @ts-ignore
			expect(getTaskForToday([], mockedChallenges)).toEqual({});
		});

		it('should return empty object if passed value is an object', () => {
			// @ts-ignore
			expect(getTaskForToday({}, mockedChallenges)).toEqual({});
		});

		it('should return empty object if passed value is a function', () => {
			// @ts-ignore
			expect(getTaskForToday(() => {}, mockedChallenges)).toEqual({});
		});

		it('should return empty object if challenges is an empty array', () => {
			expect(getTaskForToday(1, [])).toEqual({});
		});
	});

	describe('Main logic', () => {
		it('should return task for today if today is a first day of challenge', () => {
			expect(getTaskForToday(1, mockedChallenges)).toEqual(mockedTaskForToday);
		});
		it('should return task for today, if today is 2nd day of challenge', () => {
			expect(getTaskForToday(4, mockedChallenges)).toEqual(mockedTaskForToday);
		});
	});

	describe('Corner cases', () => {
		it('should return empty object if challenge is completed', () => {
			expect(getTaskForToday(2, mockedChallenges)).toEqual({});
		});

		it('should return empty object if challenge not started', () => {
			expect(getTaskForToday(3, mockedChallenges)).toEqual({});
		});

		it('should return empty object if no task for today', () => {
			expect(getTaskForToday(90, mockedChallenges)).toEqual({});
		});
	});
});
