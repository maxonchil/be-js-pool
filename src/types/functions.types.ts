import { Status } from '../models/status.models';

import { ArchiveItem, Task, TaskForToday } from '../models/tasks.models';

import { Achievement, ActualAchievement } from '../models/achievements.models';

import { Challenge } from '../models/challenge.models';

import { AchievementsStatusMap } from './maps.types';

export type checkCompleteFn = (tasksStatus: Map<number, Status>) => Status;

export type GetTaskForTodayFn = (challengeId: string) => TaskForToday;

export type GetActualAchievementsFn = (challengeId: string) => ActualAchievement[];

export type GetTaskArchiveFn = (challengeId: string) => ArchiveItem[];

export type StartNewChallengeFn = (
	tasks: Task[],
	challenges: Challenge[],
	challengeDuration: number,
	achievementsCount: number
) => Challenge;

export type CalculateAchievementsStatusFn = (
	achievementsList: Achievement[],
	challengeTasksStatus: Achievement[]
) => AchievementsStatusMap;
