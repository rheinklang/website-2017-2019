import * as React from 'react';
import './css/base.css';
import './css/variations.css';

export interface ISectionProps {
	children: any;
	id?: string;
	title?: string;
	description?: string;
	colorize?: 'red' | 'green' | 'dark-turquise' | 'white';
}

export const Section = ({ id, colorize, title, description, children }: ISectionProps) => {
	return (
		<section className={`m-section${id ? ` m-section--${id}` : ''}${colorize ? ` h-colorize--${colorize}` : ''}`}>
			<article className="m-section__article">
				{title && <h2 className="m-section__title">{title}</h2>}
				{description && <p className="m-section__description">{description}</p>}
				{children}
			</article>
		</section>
	);
};