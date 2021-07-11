import { BuildStatusMapFn, StatusMap } from '@types';

import { StatusStates } from '../../enums';

import { BaseNode } from '@models';

export const buildStatusMap: BuildStatusMapFn = <T extends BaseNode>(
	items: T[],
): StatusMap => items.reduce((memo: StatusMap, { _id }: T) => {
		memo[_id] = {
			state: StatusStates.Pending,
			updated: new Date().toLocaleDateString(),
		};
	return memo;
}, {});
