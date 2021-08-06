import { ActualAchievement } from '@models';

import { BuildActualAchievementsFn } from '@types';

import { getALlAchievements, transformAchievements } from '../achievements-utils';

export const buildActualAchievements: BuildActualAchievementsFn = async (
	challengeDuration: number,
	achievementsCount: number,
): Promise<ActualAchievement[]> => {
	const achievements = await getALlAchievements();
	const validAchievementsCount = (achievementsCount || challengeDuration / 6);
	const targetAchievements = achievements.slice(validAchievementsCount);

	return transformAchievements(targetAchievements);
};
