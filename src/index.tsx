import * as React from 'react';
import * as ReactDOM from 'react-dom';

// all libraries
import 'bulma/css/bulma.css';
import 'microtip/microtip.css';
import 'vanilla-tilt/dist/vanilla-tilt.min.js';

// application content
import App from './App';
import { ErrorBoundary } from './ErrorBoundary';
// import registerServiceWorker from './registerServiceWorker';

// stores
import { configuration } from './store';

ReactDOM.render(
	<ErrorBoundary>
		<App configurationStore={configuration} />
	</ErrorBoundary>,
	document.getElementById('root') as HTMLElement
);

// registerServiceWorker();
