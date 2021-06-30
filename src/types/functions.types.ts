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
 * @param challenges Full list of challenges.
 * @returns TaskForToday Current task with its status.
 */
export type GetTaskForTodayFn = (
	challengeId: number,
	challenges: Challenge[],
) => TaskForToday;

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
 * @param challenges Full list of challenges.
 * @returns ArchiveItem[] Array of past tasks with their results.
 */
export type GetTaskArchiveFn = (
	challengeId: number,
	challenges: Challenge[],
) => ArchiveItem[];

/**
 * Returns a new challenge. Challenge duration that by default should be 30 days,
 * number of achievements – by default, challenge duration / 6.
 * @category Functions
 * @param tasks Array of tasks for new challenge.
 * @param challenges Array of challenges for new challenge.
 * @param duration Duration of a new challenge.
 * @param achievementsCount Count of achievement for a new challenge.
 * @returns Challenge New challenge.
 */
export type StartNewChallengeFn = (
	tasks: Task[],
	challenges: Challenge[],
	duration: number,
	achievementsCount: number,
) => Challenge;

/**
 * Returns achievements status for the challenge by its achievements list and tasks status.
 * @category Functions
 * @param achievements List of an achievements.
 * @param tasksStatuses Map of tasks and their statuses.
 * @returns AchievementsStatusMap Map of statuses for the challenge with id as key.
 */
export type CalculateAchievementsStatusFn = (
	achievements: Achievement[],
	tasksStatuses: TasksStatusMap,
) => AchievementsStatusMap;

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
 * @returns ActualAchievement Array of actual achievements.
 */
export type BuildActualAchievementsFn = (
	challengeDuration: number,
	achievementsCount: number,
) => ActualAchievement[]

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
 * @returns Task[] Array of tasks for target achievement.
 */
export type GetTasksForAchievementFn = (
	achievementId: number,
) => Task[];

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
