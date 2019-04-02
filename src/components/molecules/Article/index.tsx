import * as React from 'react';
import VanillaTilt from 'vanilla-tilt';
import { AsyncImage } from '../../abstract/AsyncImage';
import './css/article.scss';

interface IArticleProps {
	image: string,
	title: string,
	text: string[],
	reverse?: boolean,
	hash?: string
}

let articleTiltId = 0;

export class Article extends React.Component<IArticleProps> {
	public static displayName = 'Article';
	private tiltInstance: VanillaTilt;
	private id: number = -1;

	constructor(props: IArticleProps) {
		super(props);

		this.id = articleTiltId + 1;
		articleTiltId++;
	}

	public componentDidMount() {
		this.tiltInstance = new VanillaTilt(document.getElementById(`m-article-id-${this.id}`)!)
	}

	public componentWillUnmount() {
		this.tiltInstance.destroy();
	}

	public render() {
		const props = this.props;

		return (
			<article id={`m-article-id-${this.id}`} className="m-article col-xs-12 col-md-6" data-tilt={true} data-tilt-glare={true} data-tilt-scale={1.1}>
				<div className="m-article__wrapper">
					<header>
						<figure className="m-article__figure">
							<AsyncImage path={`article/${props.image}`} alt={props.title} />
						</figure>
					</header>
					<div className="m-article__content">
						<h2>{props.title}</h2>
						{props.text.map((t, i) => <p className="m-article__text" key={i}>{t}</p>)}
					</div>
				</div>
			</article>
		)
	}
}
