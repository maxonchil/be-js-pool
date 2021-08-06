import mongoose from 'mongoose';

import { Task } from '../../models';

const { Schema } = mongoose;

const taskSchema = new Schema({
	description: { type: String, required: true },
});

export const TaskModel = mongoose.model<Task>('Task', taskSchema);
