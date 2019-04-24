// tslint:disable: jsx-no-lambda
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// all libraries
import 'bulma/css/bulma.css';
import 'microtip/microtip.css';
import 'vanilla-tilt/dist/vanilla-tilt.min.js';

// application content
import App from './App';
import { ErrorBoundary } from './ErrorBoundary';

// stores
import { configuration, ticketing } from './store';

// apps
import TicketApp from './Ticketing';

// components
import { Error404 } from './components/views/404/index';
import { Datenschutz } from './components/views/datenschutz/index';

ReactDOM.render(
	<ErrorBoundary>
		<BrowserRouter>
			<Switch>
				<Route exact={true} path="/" render={() => (
					<App configurationStore={configuration} />
				)} />
				<Route exact={true} path="/tickets" render={() => (
					<TicketApp configurationStore={configuration} ticketingStore={ticketing} />
				)} />
				<Route exact={true} path="/datenschutz" component={Datenschutz} />
				<Route component={Error404} />
			</Switch>
		</BrowserRouter>
	</ErrorBoundary>,
	document.getElementById('root') as HTMLElement
);
