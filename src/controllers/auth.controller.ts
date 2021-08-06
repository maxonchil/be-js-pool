import { Request, Response } from 'express';

import * as jwt from 'jsonwebtoken';
import { EXPIRES_TOKEN_TIME, SECRET_KEY } from '../config/config';

export class AuthenticationController {
	signup({ user }: Request, res: Response): void {
		res.json({
			message: 'Signup successful',
			user,
		});
	}

	async login(req: Request, res: Response) {
		const { _id } = req.user;
		const expiresIn = process.env.EXPIRES_TOKEN_TIME || EXPIRES_TOKEN_TIME;
		const token = await jwt.sign({ id: _id }, SECRET_KEY, { expiresIn });

		return res.json({ token });
	}
}
