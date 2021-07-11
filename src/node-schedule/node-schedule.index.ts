import schedule from 'node-schedule';

import { taskJob } from './jobs/tasks.job';

import { challengeJob } from './jobs/challenge.job';

schedule.scheduleJob('00 00 12 * * 0-6', taskJob);

schedule.scheduleJob('00 00 12 * * 0-6', challengeJob);
