import * as ReactGA from 'react-ga';

const IS_PROD = process.env.NODE_ENV === 'production';

export const initialize = () => {
	// analytics setup
	ReactGA.initialize('UA-57645783-4', {
		debug: !IS_PROD,
		gaOptions: { cookieDomain: 'none' }
	});

	ReactGA.pageview(window.location.pathname + window.location.search);
	if (!IS_PROD) {
		// tslint:disable-next-line:variable-name
		const _gaq: any[] = (window as any)._gaq || [];
		_gaq.push(["_setAccount", "UA-1234-1"]);
		_gaq.push(["_setDomainName", "none"]);
		_gaq.push(["_trackPageview"]);
	}
}
