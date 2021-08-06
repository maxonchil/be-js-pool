import { Status, Task } from '@models';

/**
 * Map of achievements statuses with id as key.
 * @category Types
 */
export type AchievementsStatusMap = Record<string, Status>;

/**
 * Map of tasks statuses with id as key.
 * @category Types
 */
export type TasksStatusMap = Record<number, Status>;

/**
 * Type for Statuses map of app.
 * @category Types
 */
export type StatusMap = TasksStatusMap | AchievementsStatusMap;

/**
 * Map of tasks for each challenge by it id.
 * @category Types
 */
export type AchievementsMap = Record<number, Task[]>;
