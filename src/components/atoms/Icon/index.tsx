import * as React from 'react';
import './css/icons.scss';

export interface IIconProps {
	select: string;
	appendClass?: string
}

export const Icon = ({ select, appendClass = '' }: IIconProps) => <i className={`a-icon a-icon-${select}${appendClass ? ` ${appendClass}` : ''}`} />;
