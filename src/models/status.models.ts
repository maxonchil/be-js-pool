import { States } from '../enums/statuses.enum';

export interface Status {
	state: States;
	updated: Date;
}
