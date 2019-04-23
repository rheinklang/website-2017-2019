import * as React from 'react';

import './css/jumbotron.scss';

interface IJumbotronState {
	inlineSVG: null | any;
}

export class Jumbotron extends React.Component<{}, IJumbotronState> {
	public state: IJumbotronState = {
		inlineSVG: null
	}

	public componentDidMount() {
		this.loadInlineSVGAsync();
	}

	public render() {
		return (
			<div className="m-jumbotron">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 center-xs" dangerouslySetInnerHTML={{ __html: this.state.inlineSVG }} />
					</div>
				</div>
			</div>
		)
	}

	private loadInlineSVGAsync() {
		// load the SVG async, because file size is too large inlined --> bundle size of main will be ~3mb
		import('../../abstract/AsyncImage/images/general/cover.svg').then(result => {
			this.setState({
				inlineSVG: result
			})
		})
	}
}

export default Jumbotron;
