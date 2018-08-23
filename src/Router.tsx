import DevTools from 'mobx-react-devtools';
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PartnerStore } from './models/PartnerStore';
import { PartnerView } from './views/PartnerView';

const createNamedPage = (name: string) => () => <h1>{name}</h1>;

const partnerStore = new PartnerStore();

export const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact={true} path="/" component={createNamedPage('Home (/)')} />
			<Route exact={true} path="/impressionen/" component={createNamedPage('Impressionen (/impressionen)')} />
			<Route exact={true} path="/impressionen/:year" component={createNamedPage('Home (/impressionen/:year)')} />
			<Route exact={true} path="/ueber-uns" component={createNamedPage('About Us (/ueber-uns)')} />
			<Route
				exact={true}
				path="/ueber-uns/crew/:personId"
				component={createNamedPage('About One (/ueber-uns/:personId)')}
			/>
			<Route exact={true} path="/ueber-uns/partner" render={() => <PartnerView store={partnerStore} />} />
			<Route
				path="/ueber-uns/partner/:partnerId"
				component={createNamedPage('About One (/ueber-uns/:personId)')}
			/>
			<Route exact={true} path="/ueber-uns/kontakt" component={createNamedPage('Kontakt (/kontakt)')} />
			<Route exact={true} path="/partner" component={createNamedPage('Partner (/partner)')} />
			<Route
				exact={true}
				path="/partner/:partnerId"
				component={createNamedPage('Partner (/partner/:partnerId)')}
			/>
			<Route component={createNamedPage('Error Page')} />
			<DevTools />
		</Switch>
	</BrowserRouter>
);
