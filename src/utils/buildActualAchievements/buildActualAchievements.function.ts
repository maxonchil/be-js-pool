import { Achievement, ActualAchievement } from '@models';
import { StatusStates } from '../../enums';

import { BuildActualAchievementsFn } from '@types';

import { achievements, defaultAchievements } from '../../data/achievements.json';
const defaultAchievementsCount = 2;

export const buildActualAchievements: BuildActualAchievementsFn = (
	challengeDuration: number,
	achievementsCount: number,
): ActualAchievement[] => {
	const validAchievementsCount = (achievementsCount || challengeDuration / 6) - defaultAchievementsCount;
	const achievementsToIncludeCount = validAchievementsCount > achievements.length
		? achievements.length
		: validAchievementsCount;
	const mergedAchievements = [...defaultAchievements, ...achievements.slice(0, achievementsToIncludeCount)];

	return mergedAchievements.map((achievement: Achievement) => ({
		...achievement,
		image: 'mockUrl',
		status: {
			state: StatusStates.Pending,
			updated: new Date().toLocaleDateString(),
		},
	} as ActualAchievement));
};
