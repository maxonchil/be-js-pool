import { BaseNode } from '@models';

import { FilterStatusMapFn, StatusMap } from '@types';

export const filterStatusMap: FilterStatusMapFn = <T extends BaseNode>(
	statusMap: StatusMap,
	source: T[] = [],
): StatusMap => Object.entries(statusMap)
	.reduce((memo, [_id, status]) => {
		const isInScope = source.find(({ _id: entityId }) => entityId === _id);
		if (!isInScope) return memo;
		return {
			...memo,
			[_id]: status,
		};
}, {});
