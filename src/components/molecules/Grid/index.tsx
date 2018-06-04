import * as React from 'react';
import './css/base.css';

export interface IAbstractGridProps {
	children: any;
}

export interface IGridColumnProps {
	spacing?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Grid = ({ children }: IAbstractGridProps) => <div className="m-grid">{children || null}</div>;
export const Column = ({ children, spacing }: IAbstractGridProps & IGridColumnProps) => (
	<div className={`m-grid__column${spacing ? ` m-grid__column--space-${spacing}` : ''}`}>{children || null}</div>
);
