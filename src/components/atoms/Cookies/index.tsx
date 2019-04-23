// tslint:disable: jsx-no-lambda
import * as Cookie from 'js-cookie';
import * as React from 'react';
import { Link } from 'react-router-dom';

import './css/cookies.scss';

interface ICookiesState {
	update?: string
}

export class Cookies extends React.Component<{}, ICookiesState> {
	public state: ICookiesState = {};

	public render() {
		if (Cookie.get('rheinklang-accepted-dao-terms')) {
			return null;
		}

		return (
			<article className="a-cookies">
				<div className="a-cookies__wrapper">
					<p className="a-cookies__text">
						Diese Website verwendet Cookies – nähere Informationen dazu und zu Ihren Rechten als Benutzer finden Sie in unserer Datenschutzerklärung.&nbsp;
						Klicken Sie auf "Ich stimme zu", um Cookies zu akzeptieren und direkt unsere Website besuchen zu können.
					</p>
					<div className="a-cookies__actions">
						<span className="a-cookies__actions-do" onClick={() => {
							Cookie.set('rheinklang-accepted-dao-terms', 'true');
							this.setState({ update: new Date().toISOString() })
						}}>
							Ich stimme zu
						</span>
						<Link className="a-cookies__actions-do" to="/datenschutz">
							Datenschutzerklärung
						</Link>
					</div>
				</div>
			</article>
		)
	}
}
