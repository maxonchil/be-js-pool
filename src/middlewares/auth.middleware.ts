import { authenticate } from 'passport';

export const authMiddleware = (type: string) => authenticate(type, { session: false });
