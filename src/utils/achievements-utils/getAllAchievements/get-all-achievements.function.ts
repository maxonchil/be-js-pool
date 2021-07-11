import { Achievement } from '../../../models';
import { AchievementModel } from '../../../mongoose';
import { adaptAchievements } from '../adaptAchievements/adaptAchievements.function';

export const getALlAchievements = async (): Promise<Achievement[]> => {
	const achievements = await AchievementModel.find();
	return adaptAchievements(achievements);
};
