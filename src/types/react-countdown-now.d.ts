declare module 'react-countdown-now' {
	export interface IReactCountdownNowProps {
		date: Date | string;
		renderer?: Function;
	}

	export class Countdown extends React.Component<IReactCountdownNowProps, any> {}

	export default Countdown;
}
