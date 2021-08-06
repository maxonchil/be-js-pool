import {
	Achievement,
	ActualAchievement,
	ArchiveItem,
	BaseNode,
	Challenge,
	Task,
	TaskForToday,
} from '@models';

import { AchievementsStatusMap, StatusMap, TasksStatusMap } from '@types';
import { StatusStates } from '@enums';

/**
 * Method that can return an achievement status by tasks status.
 * @category Functions
 * @param tasksStatus Status of task to check if it is completed.
 * @returns StatusStates An achievement status.
 */
export type CheckCompleteFn = (tasksStatus: TasksStatusMap) => StatusStates;

/**
 * Returns a current task with its status by the challenge id.
 * @category Functions
 * @param challengeId id of challenge to get task for today.
 * @returns TaskForToday Current task with its status promise.
 */
export type GetTaskForTodayFn = (
	challengeId: string,
) => Promise<TaskForToday>;

/**
 * Returns a list of actual achievements by the challenge id.
 * @category Functions
 * @param challengeId id of challenge to get actual achievements.
 * @param challenges Full list of challenges.
 * @returns ActualAchievement[] Array of actual achievements.
 */
export type GetActualAchievementsFn = (
	challengeId: number,
	challenges: Challenge[],
) => ActualAchievement[];

/**
 * Returns all past tasks with their results by the challenge id.
 * @category Functions
 * @param challengeId of challenge to get archive items.
 * @param field field name of challenge object.
 * @returns ArchiveItem[] Array of past tasks with their results as promise.
 */
export type GetChallengeDataFn = <T>(
	challengeId: string,
	field: keyof Challenge,
) => Promise<T[]>;

/**
 * Returns a new challenge. Challenge duration that by default should be 30 days,
 * number of achievements – by default, challenge duration / 6.
 * @category Functions
 * @param tasks Array of tasks for new challenge.
 * @param duration Duration of a new challenge.
 * @param achievementsCount Count of achievement for a new challenge.
 * @param creatorId Id of challenge creator.
 * @returns Challenge New challenge as promise.
 */
export type StartNewChallengeFn = (
	tasks: Task[],
	duration: number,
	achievementsCount: number,
	creatorId: string,
) => Promise<Challenge>;

/**
 * Returns achievements status for the challenge by its achievements list and tasks status.
 * @category Functions
 * @param tasksStatuses Map of tasks and their statuses.
 * @returns AchievementsStatusMap Map of statuses for the challenge with id as key.
 */
export type CalculateAchievementsStatusFn = (
	tasksStatuses: TasksStatusMap,
) => Promise<AchievementsStatusMap>;

/**
 * Find and return challenge by it id.
 * @category Functions
 * @param challengeId Id of a target challenge.
 * @param challenges Full list of challenges.
 * @returns Challenge Founded challenge.
 */
export type GetChallengeByIdFn = (
	challengeId: number,
	challenges: Challenge[],
) => Challenge

/**
 * Check is some challenge in progress.
 * @category Functions
 * @param challenges List of challenges.
 * @returns Boolean Boolean value, which will tell us is some challenge in progress already.
 */
export type IsSomeChallengeInProgressFn = (
	challenges: Challenge[],
) => boolean

/**
 * Build array of actual achievements.
 * @category Functions
 * @param challengeDuration Duration of a new challenge.
 * @param achievementsCount Count of achievement for a new challenge.
 * @returns ActualAchievement Array of actual achievements as promise.
 */
export type BuildActualAchievementsFn = (
	challengeDuration: number,
	achievementsCount: number,
) => Promise<ActualAchievement[]>

/**
 * Create a status map from passed items.
 * @category Functions
 * @param items Array of items, from which should be created map.
 * @returns StatusMap Map with items statuses, where id is a key and status as a value.
 */
export type BuildStatusMapFn = <T extends BaseNode>(
	items: T[],
) => StatusMap;

/**
 * Return tasks for achievement by it id;
 * @category Functions
 * @param achievementId Id of target achievement.
 * @returns Task[] Array of tasks for target achievement as prmise.
 */
export type GetTasksForAchievementFn = (
	achievementId: string,
) => Promise<Task[]>;

/**
 * Filter status map by source entity array.
 * @category Functions
 * @param statusMap Map os some items statuses.
 * @param source Array of source for filtering.
 * @returns StatusMap Map with items statuses, where id is a key and status as a value.
 */
export type FilterStatusMapFn = <T extends BaseNode>(
	statusMap: StatusMap,
	source: T[],
) => StatusMap;

/**
 * Return current day of challenge using challenge start date.
 * @category Functions
 * @param startDate Date as string of start challenge.
 * @returns number Current day of challenge.
 */
export type GetCurrentChallengeDayFn = (
	startDate: string,
) => number;
