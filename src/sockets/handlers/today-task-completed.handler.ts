import { calculateAchievementsStatus, getTaskForToday, updateTaskStatusMap } from '../../utils';

import { StatusStates } from '../../enums';

import { TodayTaskCompletedPayload } from '../models/today-task-completed-payload.model';

import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { SocketEvents } from '../enums/events.enum';

import { ChallengeModel } from '../../mongoose';

export const todayTaskCompletedHandler = (socket: DefaultEventsMap) => async ({ _id }: TodayTaskCompletedPayload) => {
	try {
		const targetChallenge = await ChallengeModel.findOne(({ _id }));

		if (!targetChallenge) return socket.emit({});

		const { _id: taskId } = await getTaskForToday(_id);
		const updatedTasksStatuses = await updateTaskStatusMap(
			targetChallenge.tasksStatus,
			taskId,
			StatusStates.Success,
		);
		const achievementsStatuses = await calculateAchievementsStatus(updatedTasksStatuses);
		const patch = {
			tasksStatus: updatedTasksStatuses,
			achievementsStatuses: achievementsStatuses,
		};

		await ChallengeModel.updateOne({ _id: targetChallenge._id }, patch);

		socket.emit(SocketEvents.AchievementStatusUpdated, { achievementsStatuses });
		console.log('Task for today state updated');
	} catch (error) {
		console.log('Error while calculation today task complete state', error);
		socket.emit(SocketEvents.Error, { error });
	}
};
