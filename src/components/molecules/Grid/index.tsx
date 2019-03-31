import * as React from 'react';
import './css/base.scss';

export interface IAbstractGridProps {
	children: any;
	className?: string;
}

export interface IGridColumnProps {
	spacing?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Grid = ({ children, className }: IAbstractGridProps) => (
	<div className={'m-grid' + (className ? ' ' + className : '')}>{children || null}</div>
);

export const Column = ({ children, spacing, className }: IAbstractGridProps & IGridColumnProps) => (
	<div
		className={`m-grid__column${spacing ? ` m-grid__column--space-${spacing}` : ''}${
			className ? ' ' + className : ''
			}`}
	>
		{children || null}
	</div>
);
