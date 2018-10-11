import * as React from 'react';
import { Icon } from '../../atoms/Icon';
import './css/off-canvas.css';

export const OffCanvas = () => {
	return (
		<div className="m-off-canvas">
			<div className="m-off-canvas__trigger">
				<Icon select="menu" />
			</div>
		</div>
	);
};
