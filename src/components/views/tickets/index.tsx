import { observer } from 'mobx-react';
import * as React from 'react';

import { TicketingStore } from '../../../store/TicketingStore';
import { Loader } from '../../atoms/FancyLoader';

import './css/tickets.scss';

export interface ITicketsViewProps {
	ticketingStore: TicketingStore
}

export interface ITicketsViewState {
	frameContentsLoaded: boolean
}

@observer
class TicketsView extends React.Component<ITicketsViewProps, ITicketsViewState> {
	public static displayName = 'TicketsView';

	public state: ITicketsViewState = {
		frameContentsLoaded: false
	};

	private iframe: HTMLIFrameElement | null = null;

	public componentDidMount() {
		if (!this.iframe) {
			return;
		}

		this.iframe.addEventListener('load', this.onFrameLoad.bind(this));
	}

	public render() {
		const { embeddFrameURL } = this.props.ticketingStore;

		return (
			<React.Fragment>
				<iframe
					width="100%"
					height="400"
					src={embeddFrameURL}
					ref={(ref) => this.iframe = ref}
					// tslint:disable-next-line: jsx-no-lambda
					onLoad={() => this.onFrameLoad} />
				{!this.state.frameContentsLoaded && <Loader />}
				<script src="https://embed.eventfrog.ch/api/scripts/embed/event.js" />
			</React.Fragment>
		)
	}

	private onFrameLoad() {
		this.setState({
			frameContentsLoaded: true
		});
	}
}

export default TicketsView;
