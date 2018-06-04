import * as React from 'react';
import './css/base.css';

export const Loader = () => {
	return (
		<div className="a-loader">
			<div className="a-loader__holder">
				<div className="a-loader__box" />
			</div>
			<div className="a-loader__holder">
				<div className="a-loader__box" />
			</div>
			<div className="a-loader__holder">
				<div className="a-loader__box" />
			</div>
		</div>
	);
};
