import mongoose from 'mongoose';

import { User } from '../../models/user.model';

import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		uniq: true,
	},
	password: {
		type: String,
		required: true,
	}
});

userSchema.pre(
	'save',
	async function (next) {
		try {
			this.password = await bcrypt.hash(this.password, 10);
			next();
		} catch (error) {
			console.log('User saving was failed', error);
		}
	}
);

userSchema.methods.isValidPassword = async function(password) {
	try {
		return await bcrypt.compare(password, this.password);
	} catch (error) {
		console.log('Error, when triyng to compare password');
	}
};

export const UserModel = mongoose.model<User>('User', userSchema);
