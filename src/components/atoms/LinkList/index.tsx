import * as React from 'react';
import { ILinkProps, Link } from '../link';

export interface ILinkListProps {
	links: ILinkProps[];
	modifier?: string;
}

export const LinkList = ({ links, modifier }: ILinkListProps) => (
	<ul className={'m-link-list' + (modifier ? ` m-link-list--${modifier}` : '')}>
		{links.map((link: ILinkProps, index: number) => {
			return <Link key={index} {...link} />;
		})}
	</ul>
);
