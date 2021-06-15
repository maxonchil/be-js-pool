import { checkComplete } from './checkComplete.function';
import { TasksStatusMap } from '../../types';
import { StatusStates } from '../../enums';

const mockedTasksStatus: TasksStatusMap = {
	1: {
		state: StatusStates.Pending,
		updated: new Date().toLocaleDateString(),
	},
	2: {
		state: StatusStates.Pending,
		updated: new Date().toLocaleDateString(),
	},
};

const mockedSuccessStatus: TasksStatusMap = {
	3: {
		state: StatusStates.Success,
		updated: new Date().toLocaleDateString(),
	},
};

const mockedFailStatus: TasksStatusMap = {
	3: {
		state: StatusStates.Failure,
		updated: new Date().toLocaleDateString(),
	},
};

const mockedInProgressStatus: TasksStatusMap = {
	3: {
		state: StatusStates.Pending,
		updated: new Date().toLocaleDateString(),
	},
	4: {
		state: StatusStates.Success,
		updated: new Date().toLocaleDateString(),
	},
};

describe('#checkComplete', () => {
	describe('Arguments', () => {
		it('should return empty object if tasksStatus is empty', () => {
			expect(checkComplete({})).toEqual({});
		});

		it('should return empty object if tasksStatus argument is a number', () => {
			// @ts-ignore
			expect(checkComplete(1)).toEqual({});
		});

		it('should return empty object if tasksStatus argument is a string', () => {
			// @ts-ignore
			expect(checkComplete('')).toEqual({});
		});

		it('should return empty object if tasksStatus argument is a function', () => {
			// @ts-ignore
			expect(checkComplete(() => {})).toEqual({});
		});

		it('should return empty object if tasksStatus argument is an array', () => {
			// @ts-ignore
			expect(checkComplete([])).toEqual({});
		});
	});

	describe('Main logic', () => {
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
