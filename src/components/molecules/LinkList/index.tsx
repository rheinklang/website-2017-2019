import * as React from 'react';
import { ILinkProps, Link } from '../../atoms/link';
import './css/link-list.css';
import './css/modifiers/main-navigation.css';

export interface ILinkListProps {
	links: ILinkProps[];
	modifier?: string;
}

export const LinkList = ({ links, modifier }: ILinkListProps) => (
	<ul className={'m-link-list' + (modifier ? ` m-link-list--${modifier}` : '')}>
		{links.map((link: ILinkProps, index: number) => {
			return (
				<li className="m-link-list__item" key={index + link.href}>
					<Link {...link} />
				</li>
			);
		})}
	</ul>
);
