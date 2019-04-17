import * as React from 'react';
// import { LazyImage } from 'react-lazy-images';
import VanillaTilt from 'vanilla-tilt';

import { CMSImage } from '../../../components/atoms/CMSImage';
import { IDirectusImage } from '../../../schemes/cms/DirectusImage';

import './css/article.scss';

interface IArticleProps {
	image: IDirectusImage,
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
			<article id={`m-article-id-${this.id}`} className="m-article" data-tilt={true} data-tilt-glare={true} data-tilt-scale={1.1}>
				<div className="m-article__wrapper">
					<header>
						<figure className="m-article__figure">
							<CMSImage {...props.image} />
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

	// private renderImagePlaceholder({ imageProps, ref }: any) {
	// 	return <div ref={ref} {...imageProps} />
	// }

	// private renderActualImage({ imageProps }: any) {
	// 	return <img {...imageProps} />
	// }
}
