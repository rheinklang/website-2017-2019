import * as React from 'react';
import './css/icons.scss';

export interface IIconProps {
	select: string;
}

export const Icon = ({ select }: IIconProps) => <i className={`a-icon a-icon--${select}`} />;
