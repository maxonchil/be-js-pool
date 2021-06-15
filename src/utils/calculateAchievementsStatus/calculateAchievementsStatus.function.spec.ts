import { calculateAchievementsStatus } from './calculateAchievementsStatus.function';
import {
	mockedTasksStatusMap,
	mockedAchievements,
	mockedAchievementsStatusMap,
	mockedSuccessTasksStatusMap,
	successStatus, pendingStatus, mockedFailTasksStatusMap, failStatus,
} from './calculateAchievementsStatus.mock';




describe('#calculateAchievementsStatus', () => {
	describe('Arguments', () => {
		describe('Achievements', () => {
			it('should return empty object, if no achievements was passed', () => {
				// @ts-ignore
				const createdAchievement = calculateAchievementsStatus(undefined, mockedTasksStatusMap);
				expect(createdAchievement).toEqual({});
			});

			it('should return empty object if achievements is an empty array', () => {
				// @ts-ignore
				const createdAchievement = calculateAchievementsStatus([], mockedTasksStatusMap);
				expect(createdAchievement).toEqual({});
			});
		});

		describe('Tasks statuses', () => {
			it('should return empty object, if no tasks statuses passed', () => {
				// @ts-ignore
				const createdAchievement = calculateAchievementsStatus(mockedAchievements, undefined);
				expect(createdAchievement).toEqual({});
			});

			it('should return empty object, if tasks statuses is an empty object', () => {
				// @ts-ignore
				const createdAchievement = calculateAchievementsStatus(mockedAchievements, {});
				expect(createdAchievement).toEqual({});
			});
		});
	});

	describe('Main logic', () => {
		it('should return achievements status map for the challenge', () => {
			const createdAchievement = calculateAchievementsStatus(mockedAchievements, mockedTasksStatusMap);
			expect(createdAchievement).toEqual(mockedAchievementsStatusMap);
		});

		it('should set success state for first achievement, if all tasks completed', () => {
			const createdAchievement = calculateAchievementsStatus(mockedAchievements, mockedSuccessTasksStatusMap);
			expect(createdAchievement[1]).toEqual(successStatus);
		});

		it('should set pending state for first achievement, if some of task for this achievement in progress', () => {
			const createdAchievement = calculateAchievementsStatus(mockedAchievements, mockedTasksStatusMap);
			expect(createdAchievement[1]).toEqual(pendingStatus);
		});

		it('should set failure state for first achievement, if some of task for this achievement was failed', () => {
			const createdAchievement = calculateAchievementsStatus(mockedAchievements, mockedFailTasksStatusMap);
			expect(createdAchievement[1]).toEqual(failStatus);
		});
	});
});
