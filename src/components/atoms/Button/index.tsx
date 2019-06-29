import * as React from 'react';
import { Link } from 'react-router-dom';

import './css/button.scss';

export interface IButtonProps {
	link: string;
	text: string
}

export const Button: React.FC<IButtonProps> = ({ link, text }) => (
	<button className="a-button">
		{link && <Link to={link} className="a-button__content">{text}</Link>}
		{!link && <span className="a-button__content">{text}</span>}
	</button>
)
