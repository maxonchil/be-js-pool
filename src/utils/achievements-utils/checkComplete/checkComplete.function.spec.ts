import { checkComplete } from './checkComplete.function';
import { TasksStatusMap } from '../../../types';
import { StatusStates } from '../../../enums';

let mockedTasksStatus: TasksStatusMap;
let mockedSuccessStatus: TasksStatusMap;
let mockedFailStatus: TasksStatusMap;
let mockedInProgressStatus: TasksStatusMap;

beforeEach(() => {
	mockedTasksStatus = {
		1: {
			state: StatusStates.Pending,
			updated: new Date().toLocaleDateString(),
		},
		2: {
			state: StatusStates.Pending,
			updated: new Date().toLocaleDateString(),
		},
	};

	mockedSuccessStatus = {
		3: {
			state: StatusStates.Success,
			updated: new Date().toLocaleDateString(),
		},
	};

	mockedFailStatus = {
		3: {
			state: StatusStates.Failure,
			updated: new Date().toLocaleDateString(),
		},
	};

	mockedInProgressStatus = {
		3: {
			state: StatusStates.Pending,
			updated: new Date().toLocaleDateString(),
		},
		4: {
			state: StatusStates.Success,
			updated: new Date().toLocaleDateString(),
		},
	};
});

describe('#checkComplete', () => {
	describe('Invalid arguments', () => {
		it('should return empty object if tasksStatus is empty', () => {
			expect(checkComplete({})).toEqual({});
		});
	});

	describe('Valid arguments', () => {
		it('should return status of achievements, by tasksStatus', () => {
			expect(checkComplete(mockedTasksStatus)).toBeTruthy();
		});

		it('should return success status of achievements, by tasksStatus if all tasks succeed', () => {
			expect(checkComplete(mockedSuccessStatus)).toEqual(StatusStates.Success);
		});

		it('should return failure status of achievements, by tasksStatus if some of tasks was fail', () => {
			expect(checkComplete(mockedFailStatus)).toEqual(StatusStates.Failure);
		});

		it('should return pending status of achievements, by tasksStatus if some of tasks still in progress', () => {
			expect(checkComplete(mockedInProgressStatus)).toEqual(StatusStates.Pending);
		});

		it('should return in progress status of achievements, by tasksStatus if some of tasks still in progress' +
			'and no one fail', () => {
			expect(checkComplete(mockedInProgressStatus)).toEqual(StatusStates.Pending);
		});
	});
});
