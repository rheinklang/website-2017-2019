import * as React from 'react';
import './css/base.scss';

export interface IAsyncImageProps {
	path: string;
	alt: string;
	className?: string;
	modifier?: string;
	props?: object
}

export interface IAsyncImageState {
	loaded: boolean;
	imagePath: string;
}

export class AsyncImage extends React.Component<IAsyncImageProps, IAsyncImageState> {
	public static displayName = 'AsyncImage';

	public static defaultProps: IAsyncImageProps = {
		alt: 'image',
		className: 'a-async-image',
		path: '#',
	};

	public state: IAsyncImageState = {
		imagePath: '',
		loaded: false,
	};

	public async componentDidMount() {
		await this.loadAsyncImageImage();
	}

	public render() {
		const { alt, path, modifier, className } = this.props;
		const { imagePath } = this.state;

		return (
			<img
				{...(this.props.props || {})}
				className={'a-image ' + className + (modifier ? ` ${className}--${modifier}` : '')}
				src={imagePath}
				alt={alt || path || 'image'}
			/>
		);
	}

	private async loadAsyncImageImage() {
		import(`./images/${this.props.path}`)
			.then((imagePath: string) => {
				this.setState({
					imagePath,
				});
			})
			.catch((err: Error) => {
				// tslint:disable-next-line
				console.warn(err.message + ` (raw path: ${this.props.path})`);
			});
	}
}
