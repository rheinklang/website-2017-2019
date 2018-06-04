import * as React from 'react';
import './css/base.css';
import './css/primary.css';

export interface IAvatarProps {
	name: string;
	role: string;
	image: string;
	contact: string;
	modifier?: string;
}

export interface IAvatarState {
	loaded: boolean;
	imagePath: string;
}

export class Avatar extends React.Component<IAvatarProps, IAvatarState> {
	public static displayName = 'Avatar';

	public state: IAvatarState = {
		imagePath: '',
		loaded: false,
	};

	public async componentDidMount() {
		const { image } = this.props;
		await this.loadAvatarImage(image);
	}

	public render() {
		const { modifier, name, role, contact } = this.props;

		return (
			<div className={`a-avatar${modifier ? ` a-avatar--${modifier}` : ''}`}>
				<div className="a-avatar__header">
					<img className="a-avatar__image" src={this.state.imagePath} alt={name} />
				</div>
				<div className="a-avatar__content">
					<h3 className="a-avatar__name">{name}</h3>
					<p className="a-avatar__role">{role}</p>
					<a className="a-avatar__contact" href={`mailto:${contact}`}>
						{contact}
					</a>
				</div>
			</div>
		);
	}

	private async loadAvatarImage(image: string) {
		import(`./images/${image}`).then((imagePath: string) => {
			this.setState({
				imagePath,
			});
		});
	}
}
