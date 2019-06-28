import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";

import { configuration } from "./store";
import { Guide } from "./components/pages/Guide/Guide";
import { Main } from "./components/pages/Main/Main";

export default () => (
	<Router>
		<Switch>
			<Route path="/" exact={true} component={Main} />
			<Route path="/festival-2019" exact={true} component={Guide} />
			{/* Render application on 404 because we have no 404 page atm. */}
			<Route render={() => <App configurationStore={configuration} />} />
		</Switch>
	</Router>
)
