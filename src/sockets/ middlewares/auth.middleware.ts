import { authMiddleware } from '../../middlewares/auth.middleware';

import { NextFunction } from 'express';

const wrapMiddlewareForSocketIo = (middleware) => (socket, next: NextFunction) => middleware(socket.request, {}, next);

export const authSocketMiddleware = () => wrapMiddlewareForSocketIo(authMiddleware('jwt'));
