import mongoose from 'mongoose';

import { ChallengeStates } from '../../enums';

import { Challenge } from '../../models';

const { Schema } = mongoose;

const StatusSchema = new Schema({
	state: { type: String, required: true },
	updated: { type: String, required: true },
});

const ActualAchievementsSchema = new Schema({
	description: { type: String, required: true },
	image: { type: String, required: true },
	status: StatusSchema
});

const challengeSchema = new Schema({
	state: { type: ChallengeStates, required: true },
	startDate: { type: String, required: true },
	duration: { type: Number, required: true },
	tasksOrder: [{ description: String }],
	tasksStatus: { type: Object },
	actualAchievements: [ActualAchievementsSchema],
	archiveItems: { type: Array, default: [] },
	achievementsStatus: { type: Object },
	createdBy: String,

});

export const ChallengeModel = mongoose.model<Challenge>('Challenge', challengeSchema);
