import { BaseNode } from '@models';

import { FilterStatusMapFn, StatusMap } from '@types';

export const filterStatusMap: FilterStatusMapFn = <T extends BaseNode>(
	statusMap: StatusMap,
	source: T[] = [],
): StatusMap => Object.entries(statusMap)
	.reduce((memo, [id, status]) => {
		const itemId = Number(id);
		const isInScope = source.find(({ id: entityId }) => entityId === itemId);
		if (!isInScope) return memo;
		return {
			...memo,
			[itemId]: status,
		};
}, {});
