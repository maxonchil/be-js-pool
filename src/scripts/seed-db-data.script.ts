import Users from '../seeders/users.json';

import { AchievementModel, Schemas, TaskModel, UserModel } from '../mongoose';

import Achievements from '../seeders/achievements.json';

import Tasks from '../seeders/tasks.json';

import { Seeder } from 'mongoose-seed-2';

import { MONGO_URL } from '../config/config';

import { User } from '../models/user.model';

import { Achievement, Task } from '@models';

const { tasks } = Tasks;
const { users } = Users;
const { defaultAchievements, achievements } = Achievements;
const allAchievements = [...defaultAchievements, ...achievements];
const modelsToClean = [Schemas.User, Schemas.Task, Schemas.Achievement];

const seedData = async () => {
	try {
		const seedUsers = users.map((user: User) => new UserModel(user));
		const seedTasks = tasks.map((task: Task) => new TaskModel(task));
		const seedAchievements = allAchievements.map((achievement: Achievement) => new AchievementModel(achievement));
		const seedData = {
			User: seedUsers,
			Task: seedTasks,
			Achievement: seedAchievements,
		};
		const seeder = new Seeder(MONGO_URL, { useNewUrlParser: true, useCreateIndex: true });
		await seeder.clearModels(modelsToClean);
		await seeder.populateModels(seedData);
		await seeder.disconnect();
	} catch (error) {
		console.log('Error while tried to seed data', error);
	}
};

seedData()
	.then(() => console.log('Data seeded'))
	.catch((error: ErrorEvent) => console.log('Get error while tried to seed data', error));

