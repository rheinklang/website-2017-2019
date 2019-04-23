import * as React from 'react';
import { Link } from 'react-router-dom';

import './css/error.scss';

export const Error404 = () => (
	<div className="o-error">
		<h2>Diese Seite konnte nicht gefunden werden</h2>
		<p>Möglicherweise existiert die von Ihnen angeforderte Seite nicht oder nicht mehr.</p>
		<Link to="/">Zurück</Link>
	</div>
)
