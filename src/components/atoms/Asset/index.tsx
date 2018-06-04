import * as React from 'react';

export interface IAssetProps {
	name: string;
}

export const Asset = ({ name }: IAssetProps) => {
	return <img src={`assets/${name}`} />;
};
