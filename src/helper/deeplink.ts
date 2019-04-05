export const createDeepLink = (platform: string, target: string, params?: object) => {
	const queryKeys = params ? Object.keys(params) : [];
	const paramList: string[] = [];

	queryKeys.forEach(k => {
		paramList.push(`${k}=${params![k]}`);
	});

	return `${platform}://${target}${paramList.length > 0 ? `?${paramList.join('&')}` : ''}`;
};
