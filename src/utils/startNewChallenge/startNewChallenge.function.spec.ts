import { startNewChallenge } from './startNewChallenge.function';
import { Challenge } from '../../models';
import { ChallengeStates, StatusStates } from '../../enums';
import {
	mockedAchievementStatus,
	mockedActualAchievements,
	mockedTasks,
	mockedTasksStatus
} from './startNewChallenge.function.mock';

const mockedExpectedChallenge = {
		id: 2,
		state: ChallengeStates.InProgress,
		startDate: new Date().toLocaleDateString(),
		tasksOrder: mockedTasks,
		tasksStatus: mockedTasksStatus,
		duration: 30,
		archiveItems: [],
		actualAchievements: mockedActualAchievements,
		achievementsStatus: mockedAchievementStatus,
	} as Challenge;

const mockedChallenges: Challenge[] = [
	{
		id: 1,
		state: ChallengeStates.InProgress,
		startDate: new Date().toLocaleDateString(),
		tasksOrder: mockedTasks,
		tasksStatus: mockedTasksStatus,
		duration: 30,
		archiveItems: [],
		actualAchievements: mockedActualAchievements,
		achievementsStatus: mockedAchievementStatus,
	} as Challenge,
];

const mockedFinishedChallenges: Challenge[] = [
	{
		id: 1,
		state: ChallengeStates.Success,
		startDate: new Date().toLocaleDateString(),
		tasksOrder: mockedTasks,
		tasksStatus: mockedTasksStatus,
		duration: 30,
		archiveItems: [],
		actualAchievements: mockedActualAchievements,
		achievementsStatus: mockedAchievementStatus,
	} as Challenge,
];

describe('#startNewChallenge', () => {
	describe('Arguments', () => {
		describe('Empty tasks', () => {
			it('should return empty object, if no tasks list was passed as an argument', () => {
				const createdChallenge = startNewChallenge([], mockedChallenges, 0, 0);
				expect(createdChallenge).toEqual({})
			});

			it('should return empty object, if "tasks" arguments is a string', () => {
				//@ts-ignore
				const createdChallenge = startNewChallenge('', undefined, 0, 0);
				expect(createdChallenge).toEqual({});
			});

			it('should return empty object, if "tasks" arguments is an object', () => {
				//@ts-ignore
				const createdChallenge = startNewChallenge({}, undefined, 0, 0);
				expect(createdChallenge).toEqual({});
			});

			it('should return empty object, if "tasks" arguments is a function', () => {
				//@ts-ignore
				const createdChallenge = startNewChallenge(() => {}, undefined, 0, 0);
				expect(createdChallenge).toEqual({});
			});

			it('should return empty object, if "tasks" arguments is a number', () => {
				//@ts-ignore
				const createdChallenge = startNewChallenge(3, undefined, 0, 0);
				expect(createdChallenge).toEqual({});
			});

			it('should return empty object, if "challenges" arguments is a number', () => {
				//@ts-ignore
				const createdChallenge = startNewChallenge(mockedTasks, 1, 0, 0);
				expect(createdChallenge).toEqual({});
			});

			it('should return empty object, if "challenges" arguments is an object', () => {
				//@ts-ignore
				const createdChallenge = startNewChallenge(mockedTasks, {}, 0, 0);
				expect(createdChallenge).toEqual({});
			});

			it('should return empty object, if "challenges" arguments is a function', () => {
				//@ts-ignore
				const createdChallenge = startNewChallenge(mockedTasks, () => undefined, 0, 0);
				expect(createdChallenge).toEqual({});
			});
		});

		describe('Challenge duration', () => {
			it('should set challenge duration', () => {
				const createdChallenge = startNewChallenge(mockedTasks, mockedFinishedChallenges, 3, 0);
				expect(createdChallenge.duration).toEqual(3);
			});

			it('should set challenge duration to default value = 30', () => {
				const createdChallenge = startNewChallenge(mockedTasks, mockedFinishedChallenges, 0, 0);
				expect(createdChallenge.duration).toEqual(30)
			});
		});

		describe('Achievements count', () => {
			it('should set achievements count', () => {
				const createdChallenge = startNewChallenge(mockedTasks, mockedFinishedChallenges, 7, 3);
				expect(createdChallenge.actualAchievements.length).toEqual(3);
			});


			it('should set achievements count which will be count of all achievements, in passed number greater then available', () => {
				const createdChallenge = startNewChallenge(mockedTasks, mockedFinishedChallenges, 3, 9);
				expect(createdChallenge.actualAchievements.length).toEqual(5);
			});

			it('should set achievements count default value = 5', () => {
				const createdChallenge = startNewChallenge(mockedTasks, mockedFinishedChallenges, 0, 0);
				expect(createdChallenge.actualAchievements.length).toEqual(5);
			});
		});
	});

	describe('Main logic', () => {
		describe('Creation', () => {
			it('should return newly created task, if challenges array is empty', () => {
				const { tasksOrder, ...createdChallenge } = startNewChallenge(mockedTasks, [], 0, 0);
				const { tasksOrder: mockTaskOrder, ...expectedChallenge } = mockedChallenges[0];
				expect(createdChallenge).toEqual(expectedChallenge);
			});

			it('should return newly created challenge, if no challenges passed', () => {
				// @ts-ignore
				const { tasksOrder, ...createdChallenge } = startNewChallenge(mockedTasks, undefined, 0, 0);
				const { tasksOrder: mockTaskOrder, ...expectedChallenge } = mockedChallenges[0];
				expect(createdChallenge).toEqual(expectedChallenge);
			});

			it('should return newly created challenge with id greater at 1 of previous last challenge id', () => {
				const { tasksOrder, ...createdChallenge } = startNewChallenge(mockedTasks, mockedFinishedChallenges, 0, 0);
				const { tasksOrder: mockTaskOrder, ...expectedChallenge } = mockedExpectedChallenge;
				expect(createdChallenge).toEqual(expectedChallenge);
			});

			it('should not start new challenge and return empty object, if some challenge in progress already', () => {
				const createdChallenge = startNewChallenge(mockedTasks, mockedChallenges, 0, 0);
				expect(createdChallenge).toEqual({});
			});
		});

		describe('Fields creation', () => {
			it('should set today\'s date as challenge start', () => {
				const createdChallenge = startNewChallenge(mockedTasks, mockedFinishedChallenges, 0, 0);
				expect(createdChallenge.startDate).toEqual(new Date().toLocaleDateString());
			});

			it('should set state "in progress" for newly created challenge', () => {
				const createdChallenge = startNewChallenge(mockedTasks, mockedFinishedChallenges, 0, 0);
				expect(createdChallenge.state).toEqual(ChallengeStates.InProgress);
			});

			it('should crate challenge with tasks', () => {
				const createdChallenge = startNewChallenge(mockedTasks, mockedFinishedChallenges, 0, 0);
				expect(createdChallenge.tasksOrder.length).toBeTruthy();
			});
		});

		describe('Actual achievements', () => {
			it('should include by default “Complete half of the tasks” in list of achievements', () => {
				// arrange
				const completeHalf = {
					id: 1,
					description: 'Complete half of the tasks',
					status: {
						state: StatusStates.Pending,
						updated: '12/6/2021',
					},
					image: 'some image url',
				};
				// act
				const createdChallenge = startNewChallenge(mockedTasks, mockedFinishedChallenges, 0, 0);
				const createCompleteHalf = createdChallenge.actualAchievements.find(e => e.id === 1);
				// assert
				expect(createCompleteHalf).toBeTruthy();
			});

			it('should include by default "Complete all tasks" in list of achievements', () => {
				// arrange
				const completeAll = {
					id: 2,
					description: "Complete all tasks",
					status: {
						state: StatusStates.Pending,
						updated: '12/6/2021',
					},
					image: 'some image url',
				};
				// act
				const createdChallenge = startNewChallenge(mockedTasks, mockedFinishedChallenges, 0, 0);
				const createCompleteHalf = createdChallenge.actualAchievements.find(e => e.id === 2);
				// assert
				expect(createCompleteHalf).toBeTruthy();
			});
		});
	});
});
