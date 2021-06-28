import { ArchiveItem, Challenge, Status } from '../../models';
import { ChallengeStates, StatusStates } from '../../enums';
import { getTaskArchive } from './getTaskArchive.function';

let mockedStatus: Status;
let mockedArchiveItems: ArchiveItem[];
let mockedChallenges: Challenge[];

beforeEach(() => {
	mockedStatus = {
		state: StatusStates.Pending,
		updated: '12/06/2021',
	};

	mockedArchiveItems = [
		{
			id: 1,
			description: 'Some genius description',
			status: mockedStatus,
		},
	];

	mockedChallenges = [
		// Normal challenge
		{
			id: 1,
			state: ChallengeStates.InProgress,
			archiveItems: mockedArchiveItems,
		} as Challenge,
		// Completed without archive items
		{
			id: 2,
			state: ChallengeStates.Success,
			startDate: '1/6/2021',
			archiveItems: [] as ArchiveItem[],
		} as Challenge,
		// Not started challenge
		{
			id: 2,
			startDate: '12/12/2021',
			archiveItems: [] as ArchiveItem[],
		} as Challenge,
	];
});

describe('#getTaskArchive', () => {
	describe('Valid arguments', () => {
		it('should return empty object if no challenge with such id', () => {
			expect(getTaskArchive(900, mockedChallenges)).toEqual([]);
		});

		it('should return archive items of challenge id', () => {
			expect(getTaskArchive(1, mockedChallenges)).toEqual(mockedArchiveItems);
		});
	});

	describe('Corner cases', () => {
		it('should return empty object if no archive items', () => {
			expect(getTaskArchive(2, mockedChallenges)).toEqual([]);
		});

		it('should return empty array if challenge not started', () => {
			expect(getTaskArchive(2, mockedChallenges)).toEqual([]);
		});
	});
});
