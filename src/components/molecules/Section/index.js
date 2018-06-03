import React from 'react';
import './css/base.css';

export type SectionPropsType = {
	children: any,
	id?: string,
	title?: string,
	description?: string,
};

export const Section = ({ id, title, description, children }: SectionPropsType) => {
	return (
		<section className={`m-section${id ? ` m-section--${id}` : ''}`}>
			<article className="m-section__article">
				{title && <h2 className="m-section__title">{title}</h2>}
				{description && <p className="m-section__description">{description}</p>}
				{children}
			</article>
		</section>
	);
};
