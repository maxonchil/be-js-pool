import passport from 'passport';

import { Strategy as LocalStrategy } from 'passport-local';

import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';

import { UserModel } from '../mongoose';

import { SECRET_KEY } from '../config/config';

import { JWT } from '../models/jwt.model';

passport.use(
	'signup',
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password'
		},
		async (email, password, done) => {
			try {
				const user = await UserModel.create({ email, password });

				return done(null, user);
			} catch (error) {
				done(error);
			}
		}
	)
);

passport.use(
	'login',
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password'
		},
		async (email, password, done) => {
			try {
				const user = await UserModel.findOne({ email });

				if (!user) {
					return done(null, false, { message: 'User not found' });
				}

				const validate = await user.isValidPassword(password);

				if (!validate) {
					return done(null, false, { message: 'Wrong Password' });
				}

				return done(null, user, { message: 'Logged in Successfully' });
			} catch (error) {
				return done(error);
			}
		}
	)
);

passport.use(
	new JWTStrategy(
		{
			secretOrKey: SECRET_KEY,
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
		},
		async (token: JWT, done) => {
			try {
				return done(null, { id: token.id });
			} catch (error) {
				done(error);
			}
		}
	)
);

