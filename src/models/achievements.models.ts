import { Status } from './status.models';

import { checkCompleteFn } from '../types/functions.types';

/**
 * [[Interfaces]]
 */

/**
 * Base entity which describe 'id' and 'description' types for Achievements.
 * @category Interfaces
 */
interface BaseAchievement {
	id: string;
	description: string;
}

/**
 * Achievement describes a set of several tasks accomplished in the specific way.
 * @category Interfaces
 */
export interface Achievement extends BaseAchievement {
	icon: string;
	checkComplete: checkCompleteFn;
}

/**
 * ActualAchievement provides information about an achievement and its current status in scope of the challenge.
 * @category Interfaces
 */
export interface ActualAchievement extends BaseAchievement {
	status: Status;
	image: string;
}
