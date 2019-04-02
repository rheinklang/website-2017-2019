import * as React from 'react';
import * as ReactDOM from 'react-dom';

// all libraries
import 'flexboxgrid/dist/flexboxgrid.min.css';
import 'vanilla-tilt/dist/vanilla-tilt.min.js';

// application content
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<App />,
	document.getElementById('root') as HTMLElement
);

registerServiceWorker();
