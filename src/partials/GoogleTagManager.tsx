import * as React from 'react';

export const GOOGLE_GTM_ID = 'GTM-W89HWZX';

export const GoogleTagManager = () => {
	return (
		<noscript>
			<iframe
				src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_GTM_ID}`}
				height="0"
				width="0"
				style={{ display: 'none', visibility: 'hidden' }}
			/>
		</noscript>
	);
};
