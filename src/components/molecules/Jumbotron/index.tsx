import * as React from 'react';
// import { AsyncImage } from '../../abstract/AsyncImage';
import asset from '../../abstract/AsyncImage/images/general/cover.svg';

import './css/jumbotron.scss';

export class Jumbotron extends React.Component<{}> {
	public render() {
		return (
			<div className="m-jumbotron">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 center-xs" dangerouslySetInnerHTML={{ __html: asset }}>
							{/* <AsyncImage path="general/cover.svg" alt="cover" /> */}
							{/* <img src={asset} alt="cover" /> */}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
