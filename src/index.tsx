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
import { configuration, ticketing, timetable } from './store';

// apps
import TicketApp from './Ticketing';

// components
import { Error404 } from './components/views/404/index';
import { Datenschutz } from './components/views/datenschutz/index';
import { Guide } from './components/views/guide/index';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact={true} path="/" render={() => (
				<ErrorBoundary>
					<App configurationStore={configuration} />
				</ErrorBoundary>
			)} />
			<Route exact={true} path="/tickets" render={() => (
				<ErrorBoundary>
					<TicketApp configurationStore={configuration} ticketingStore={ticketing} />
				</ErrorBoundary>
			)} />
			<Route exact={true} path="/festival-2019" render={() => (
				<ErrorBoundary>
					<Guide timetableStore={timetable} configurationStore={configuration} ticketingStore={ticketing} />
				</ErrorBoundary>
			)} />
			<Route exact={true} path="/datenschutz" render={() => (
				<ErrorBoundary>
					<Datenschutz />
				</ErrorBoundary>
			)} />
			<Route component={Error404} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root') as HTMLElement
);
