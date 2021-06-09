import { Status, TaskForToday } from '@models';

/**
 * Map of achievements statuses with id as key.
 * @category Types
 */
export type AchievementsStatusMap = Record<number, Status>;

/**
 * Map of tasks statuses with id as key.
 * @category Types
 */
export type TasksStatusMap = Record<number, Status>;
/**
 * Order for tasks during challenge
 * @category Types
 */
export type TaskOrderMap = Record<string, TaskForToday>;
