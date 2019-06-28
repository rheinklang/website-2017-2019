import * as React from 'react';
import * as ReactDOM from 'react-dom';

// all libraries
import 'bulma/css/bulma.css';
import 'microtip/microtip.css';
import 'vanilla-tilt/dist/vanilla-tilt.min.js';

// runtime
import { ErrorBoundary } from './ErrorBoundary';
import Router from './Router';

ReactDOM.render(
	<ErrorBoundary>
		<Router />
	</ErrorBoundary>,
	document.getElementById('root') as HTMLElement
);

// registerServiceWorker();
