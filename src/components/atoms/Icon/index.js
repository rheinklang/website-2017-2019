import React from 'react';
import './css/icons.css';

export interface IIconProps {
	select: string;
}

export const Icon = ({ select }: IIconProps) => <i className={`a-icon a-icon--${select}`} />;
