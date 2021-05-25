import { Status } from './status.models';

import { BaseEntity } from './core.models';

export type Task = BaseEntity;

export interface TaskForToday extends BaseEntity {
	status: Status;
}

export interface ArchiveItem extends BaseEntity {
	status: Status;
}
