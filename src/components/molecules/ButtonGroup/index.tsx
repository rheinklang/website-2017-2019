import * as React from 'react';
import { Button, IButtonProps } from '../../atoms/Button';

import './css/button-group.scss';

export interface IButtonGroupProps {
	buttons: Array<IButtonProps | undefined>;
}

export const ButtonGroup: React.FC<IButtonGroupProps> = ({ buttons }) => (
	<div className="m-button-group">
		{buttons.map((button, index) => button ? <Button key={index} {...button} /> : null)}
	</div>
)
