import { Task } from '../../../models';
import { TaskModel } from '../../../mongoose';

export const saveTasks = async (tasks: Task[]): Promise<Task[]> => {
	tasks.map(async (task: Task) => {
		const createdTask = await new TaskModel(task);
		createdTask.save();
	});

	return TaskModel.find();
};
