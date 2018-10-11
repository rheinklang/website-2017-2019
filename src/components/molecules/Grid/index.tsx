import * as React from 'react';
import './css/base.css';

export interface IAbstractGridProps {
	children: any;
	className?: string;
	preserveMobile?: boolean;
}

export interface IGridColumnProps extends IAbstractGridProps {
	spacing?: 'xs' | 'sm' | 'md' | 'lg';
}

export interface IGridProps extends IAbstractGridProps {
	wrapWithConstaint?: boolean;
}

export const Constraint = ({ children, className }: IAbstractGridProps) => (
	<div className={'h-constraint' + (className ? ` ${className}` : '')}>{children || null}</div>
);

export const Grid = ({ children, className, wrapWithConstaint = false, preserveMobile = false }: IGridProps) => {
	const content = (
		<div
			className={
				'o-grid' + (className ? ' ' + className : '') + (preserveMobile ? ' o-grid--preserve-mobile' : '')
			}
		>
			{children || null}
		</div>
	);

	return wrapWithConstaint ? <Constraint>{content}</Constraint> : content;
};

export const Column = ({ children, spacing, className }: IGridColumnProps) => (
	<div
		className={`o-grid__column${spacing ? ` m-grid__column--space-${spacing}` : ''}${
			className ? ' ' + className : ''
		}`}
	>
		{children || null}
	</div>
);
