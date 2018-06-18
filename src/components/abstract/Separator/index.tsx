import * as React from 'react';
import './css/base.css';

interface ISeparatorProps {
	modifier?: string;
}

export const Separator = ({ modifier }: ISeparatorProps) => {
	return <div className={`h-separator${modifier ? ` h-separator--${modifier}` : ''}`} />;
};
