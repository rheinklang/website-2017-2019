import * as React from 'react';

export interface IPlaceholderProps {
	color: 'white' | 'black';
	height: number;
}

import './css/placeholder.scss';

export const Placeholder = (props: IPlaceholderProps = { color: 'white', height: 0 }) => (
	<div
		className={`h-placeholder h-placeholder--skin-${props.color}`}
		style={{ height: `${props.height}px` }}
	/>
)
