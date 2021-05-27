import { Status } from '../models/status.models';

import { ArchiveItem, Task, TaskForToday } from '../models/tasks.models';

import { Achievement, ActualAchievement } from '../models/achievements.models';

import { Challenge } from '../models/challenge.models';

import { AchievementsStatusMap, TasksStatusMap } from './maps.types';

/**
 * @category Function
 * @returns Status An achievement status.
 * @param tasksStatus Status of task to check if it is completed.
 */
export type checkCompleteFn = (tasksStatus: TasksStatusMap) => Status;

/**
 * @category Function
 * @returns TaskForToday Current task with its status.
 * @param challengeId id of challenge to get task for today.
 */
export type GetTaskForTodayFn = (challengeId: string) => TaskForToday;

/**
 * @category Function
 * @returns ActualAchievement[] Array of actual achievements.
 * @param challengeId id of challenge to get actual achievements.
 */
export type GetActualAchievementsFn = (challengeId: string) => ActualAchievement[];

/**
 * @category Function
 * @returns ArchiveItem[] Array of past tasks with their results.
 * @param challengeIdd of challenge to get archive items.
 */
export type GetTaskArchiveFn = (challengeId: string) => ArchiveItem[];

/**
 * @category Function
 * @returns Challenge New challenge.
 * @param tasks Array of tasks for new challenge.
 * @param challenges Array of challenges for new challenge.
 * @param challengeDuration Duration of a new challenge.
 * @param achievementsCount Count of achievement for a new challenge.
 */
export type StartNewChallengeFn = (
	tasks: Task[],
	challenges: Challenge[],
	challengeDuration: number,
	achievementsCount: number
) => Challenge;

/**
 * @category Function
 * @returns AchievementsStatusMap Map of statuses for the challenge with id as key.
 * @param achievements List of an achievements.
 * @param tasksStatuses Map of tasks and their statuses.
 */
export type CalculateAchievementsStatusFn = (
	achievements: Achievement[],
	tasksStatuses: TasksStatusMap
) => AchievementsStatusMap;
