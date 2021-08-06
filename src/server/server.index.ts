import * as socketIO from 'socket.io';
import { handleSockets } from '../sockets';
import mongoose from 'mongoose';

import { MONGO_URL, PORT } from '../config/config';
import { authSocketMiddleware } from '../sockets/ middlewares/auth.middleware';

import { Express } from 'express';


export const connectDB = (): Promise<mongoose.Mongoose> => {
	const connection = mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
	console.log('DB connection established');
	return connection;
};

export const setupServer = (app: Express) => {
	const port = process.env.PORT || PORT;
	return app.listen(port, () => {
		console.log(`Listening to requests on ${port}`);
	});
};

export const setupSocketConnection = (httpServer: Express) => {
	const io = new socketIO.Server(httpServer, {
		cors: {
			origin: 'http://localhost:3100',
		}
	});

	io.use(authSocketMiddleware());

	handleSockets(io);
};
