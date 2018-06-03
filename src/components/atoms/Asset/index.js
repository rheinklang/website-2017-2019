import React from 'react';

export type AssetPropsType = {
	name: string,
};

export const Asset = ({ name }: AssetPropsType) => {
	return <img src={`assets/${name}`} />;
};
