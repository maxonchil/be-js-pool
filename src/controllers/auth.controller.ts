import { Request, Response } from 'express';

import * as jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/config';

export class AuthenticationController {
	constructor() {}

	signup({ user }: Request, res: Response): void {
		res.json({
			message: 'Signup successful',
			user,
		});
	}

	async login(req: Request, res: Response) {
		const { _id } = req.user;
		const token = await jwt.sign({ id: _id }, SECRET_KEY, { expiresIn: '3h' });

		return res.json({ token });
	}
}
