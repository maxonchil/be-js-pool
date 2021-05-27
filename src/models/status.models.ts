import { States } from '../enums/statuses.enum';

/**
 * Status describes a state of some item (a task or an achievement) and a timestamp, when this state was updated.
 * @category Interfaces
 */
export interface Status {
	state: States;
	updated: Date;
}
