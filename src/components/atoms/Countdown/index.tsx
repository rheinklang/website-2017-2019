import { observer } from 'mobx-react';
import * as React from 'react';
import CountdownWidget from 'react-countdown-now';

import { ConfigurationStore } from '../../../store/ConfigurationStore';

import './css/base.scss';

interface ICountdownRendererArgs {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	completed: number;
}

interface ICountdownProps {
	configurationStore: ConfigurationStore
}

@observer
export class Countdown extends React.Component<ICountdownProps> {
	public static displayName = 'Countdown';

	public render() {
		const countdown = this.props.configurationStore.countdown;

		return countdown.visible ? (
			<div className="a-countdown">
				<CountdownWidget date={countdown.date} renderer={this.internalCountdownRenderer} />
			</div>
		) : null;
	}

	private internalCountdownRenderer({ days, hours, minutes, seconds, completed }: ICountdownRendererArgs) {
		if (completed) {
			// Render a completed state
			return null;
		} else {
			// Render a countdown
			return (
				<p className="a-countdown__content">
					<span className="a-countdown__content-wrapper">
						<span className="a-countdown__content-fragment">{days}</span>
						<span className="a-countdown__content-text">Tage</span>
					</span>
					<span className="a-countdown__content-wrapper">
						<span className="a-countdown__content-fragment">{hours}</span>
						<span className="a-countdown__content-text">Stunden</span>
					</span>
					<span className="a-countdown__content-wrapper">
						<span className="a-countdown__content-fragment">{minutes}</span>
						<span className="a-countdown__content-text">Minuten</span>
					</span>
					<span className="a-countdown__content-wrapper h-hide-on-mobile">
						<span className="a-countdown__content-fragment">{seconds}</span>
						<span className="a-countdown__content-text">Sekunden</span>
					</span>
				</p>
			);
		}
	};
}
