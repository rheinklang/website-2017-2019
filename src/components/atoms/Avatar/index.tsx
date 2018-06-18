import * as React from 'react';
import { AsyncImage } from '../../abstract/AsyncImage/index';

import './css/base.css';
import './css/primary.css';

export interface IAvatarProps {
	name: string;
	role: string;
	image: string;
	contact: string;
	modifier?: string;
}

export const Avatar = ({ modifier, name, role, contact, image }: IAvatarProps) => {
	return (
		<div className={`a-avatar${modifier ? ` a-avatar--${modifier}` : ''}`}>
			<div className="a-avatar__header">
				<AsyncImage path={`avatars/${image}`} alt={name} className="a-avatar__image" />
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
};
