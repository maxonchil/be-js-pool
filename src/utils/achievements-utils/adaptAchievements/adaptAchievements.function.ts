import { Achievement } from '../../../models';
import { checkComplete } from '../checkComplete/checkComplete.function';

const defaultIconUrl = 'https://toppng.com/uploads/preview/' +
	'achievement-icon-icon-11553495882s4jdqrtwe2.png';

export const adaptAchievements = (
	achievements: Achievement[],
): Achievement[] => achievements.map(({ _id, description, icon = defaultIconUrl }: Achievement) => ({
	_id,
	description,
	icon,
	checkComplete: checkComplete,
}));
