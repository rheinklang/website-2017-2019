import * as React from 'react';
import foreground from './assets/foreground.png';
import flower from './assets/layer-flower.png';
import leaf from './assets/layer-leaf.png';
import './css/animations.scss';
import './css/base.scss';

export interface IAnimatedLogoProps {
	modifier?: string;
}

export const AnimatedLogo = (props: IAnimatedLogoProps) => {
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
