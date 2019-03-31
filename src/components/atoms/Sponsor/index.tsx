import * as React from 'react';
import { AsyncImage } from '../../abstract/AsyncImage';
import './css/base.scss';

export interface ISponsorProps {
	name: string;
	image: string;
	link: string;
	modifier?: string;
}

export const Sponsor = ({ link, modifier, name, image }: ISponsorProps) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className={`a-sponsor${modifier ? ` a-sponsor--${modifier}` : ''}`}
		>
			<AsyncImage className="a-sponsor__image" path={`sponsors/${image}`} alt={name} />
		</a>
	);
};
