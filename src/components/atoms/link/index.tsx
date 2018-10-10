import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export interface ILinkProps {
	href: string;
	text: string;
	internal?: boolean;
	title?: string;
	modifier?: string;
	openInNewWindow?: boolean;
}

interface ILinkOptionalProps {
	rel?: string;
	target?: string;
}

export const Link = ({ href, text, title, modifier, openInNewWindow = false, internal = false }: ILinkProps) => {
	const additionalProps: ILinkOptionalProps = {};
	const className = 'a-link' + (modifier ? ` a-link--${modifier}` : '');

	if (openInNewWindow) {
		additionalProps.rel = 'noopener noreferrer';
		additionalProps.target = '_blank';
	}

	if (internal) {
		return (
			<RouterLink className={className} to={href} title={title}>
				{text}
			</RouterLink>
		);
	}

	return (
		<a href={href} className={className} title={title} {...additionalProps}>
			{text}
		</a>
	);
};
