import mongoose from 'mongoose';

import { Achievement } from '../../models';

const { Schema } = mongoose;

const achievementsSchema = new Schema({
	description: { type: String, required: true },
});

export const AchievementModel = mongoose.model<Achievement>('Achievement', achievementsSchema);
