import React from 'react';
import './css/base.css';
import './css/animations.css';
import flower from './assets/layer-flower.png';
import leaf from './assets/layer-leaf.png';
import foreground from './assets/foreground.png';

export type AnimatedLogoPropsType = {};

export const AnimatedLogo = (props: AnimatedLogoPropsType) => {
	return (
		<div className="a-animated-logo">
			<img
				src={flower}
				className="a-animated-logo__layer a-animated-logo__layer--leaf"
				alt="Rheinklang Logo - Layer"
			/>
			<img
				src={leaf}
				className="a-animated-logo__layer a-animated-logo__layer--flower"
				alt="Rheinklang Logo - Layer"
			/>
			<img src={foreground} className="a-animated-logo__artwork" alt="Rheinklang Logo - Foreground" />
		</div>
	);
};
