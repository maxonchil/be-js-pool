import { SocketEvents } from './enums/events.enum';

import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { Server } from 'socket.io';
import { todayTaskCompletedHandler } from './handlers/today-task-completed.handler';

export const handleSockets = (
	socketIO: Server<DefaultEventsMap>,
) => {
	socketIO.on(SocketEvents.Connect, (socket: DefaultEventsMap) => {
		console.log('Socket connection established');
		socket.emit(SocketEvents.ConnectionEstablished);

		socket.on(SocketEvents.TodayTaskCompleted, todayTaskCompletedHandler(socket));
	});
};
