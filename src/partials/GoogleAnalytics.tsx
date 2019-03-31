export const GOOGLE_UA_ID = 'UA-57645783-4';

export const GoogleAnalytics = () => {
	(window as any).dataLayer = (window as any).dataLayer || [];

	function gtag(...args: any[]) {
		(window as any).dataLayer.push(args);
	}

	gtag('js', new Date());
	gtag('config', GOOGLE_UA_ID);

	return null;
};
