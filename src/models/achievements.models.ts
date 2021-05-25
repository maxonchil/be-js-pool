import { Status } from './status.models';

import { BaseEntity } from './core.models';
import { checkCompleteFn } from '../types/functions.types';

export interface Achievement extends BaseEntity {
	icon: string;
	checkComplete: checkCompleteFn;
}

export interface ActualAchievement extends BaseEntity {
	status: Status;
	image: string;
}
