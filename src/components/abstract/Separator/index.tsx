import * as React from 'react';
import './css/base.scss';

interface ISeparatorProps {
	modifier?: string;
	skew?: string;
}

export const Separator = ({ modifier, skew }: ISeparatorProps) => {
	return (
		<div
			className={`h-separator${modifier ? ` h-separator--${modifier}` : ''}${
				skew ? ` h-separator--skew-${skew}` : ''
				}`}
		/>
	);
};
