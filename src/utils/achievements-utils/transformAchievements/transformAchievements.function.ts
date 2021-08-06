import { Achievement, ActualAchievement } from '../../../models';
import { StatusStates } from '../../../enums';

export const transformAchievements = (
	achievements: Achievement[],
): ActualAchievement[] => achievements.map(({ _id, description, icon: image } : Achievement) => ({
	_id,
	description,
	image: image ?? 'mockUrl',
	status: {
		state: StatusStates.Pending,
		updated: new Date().toLocaleDateString(),
	},
} as ActualAchievement));
