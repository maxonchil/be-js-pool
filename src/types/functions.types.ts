import { Achievement, ActualAchievement, ArchiveItem, Challenge, Status, Task, TaskForToday } from '@models';

import { AchievementsStatusMap, TasksStatusMap } from '@types';

/**
 * Method that can return an achievement status by tasks status.
 * @category Functions
 * @param tasksStatus Status of task to check if it is completed.
 * @returns Status An achievement status.
 */
export type CheckCompleteFn = (tasksStatus: TasksStatusMap) => Status;

/**
 * Returns a current task with its status by the challenge id.
 * @category Functions
 * @param challengeId id of challenge to get task for today.
 * @returns TaskForToday Current task with its status.
 */
export type GetTaskForTodayFn = (challengeId: string) => TaskForToday;

/**
 * Returns a list of actual achievements by the challenge id.
 * @category Functions
 * @param challengeId id of challenge to get actual achievements.
 * @returns ActualAchievement[] Array of actual achievements.
 */
export type GetActualAchievementsFn = (challengeId: string) => ActualAchievement[];

/**
 * Returns all past tasks with their results by the challenge id.
 * @category Functions
 * @param challengeId of challenge to get archive items.
 * @returns ArchiveItem[] Array of past tasks with their results.
 */
export type GetTaskArchiveFn = (challengeId: string) => ArchiveItem[];

/**
 * Returns a new challenge. Challenge duration that by default should be 30 days,
 * number of achievements – by default, challenge duration / 6.
 * @category Functions
 * @param tasks Array of tasks for new challenge.
 * @param challenges Array of challenges for new challenge.
 * @param challengeDuration Duration of a new challenge.
 * @param achievementsCount Count of achievement for a new challenge.
 * @returns Challenge New challenge.
 */
export type StartNewChallengeFn = (
	tasks: Task[],
	challenges: Challenge[],
	challengeDuration: number,
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
