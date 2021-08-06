import { Request, Response } from 'express';
import { UserModel } from '../mongoose';

export class ProfileController {
	async getUser(req: Request, res: Response) {
		try {
			const { id } = req.user;
			const user = await UserModel.findOne({ _id: id });
			res.json({ user });
		} catch (error) {
			console.log('Error while trying to get profile', error);
			res.json({ error });
		}
	}
}
