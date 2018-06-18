import * as React from 'react';
import CountdownWidget from 'react-countdown-now';
import './css/base.css';

const FESTIVAL_DATE = new Date('2018-08-18T13:00:00Z');

interface ICountdownRendererArgs {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	completed: number;
}

const internalCountdownRenderer = ({ days, hours, minutes, seconds, completed }: ICountdownRendererArgs) => {
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

export const Countdown = () => {
	return (
		<div className="a-countdown">
			<CountdownWidget date={FESTIVAL_DATE} renderer={internalCountdownRenderer} />
		</div>
	);
};
