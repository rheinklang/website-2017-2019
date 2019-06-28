import * as React from 'react';

interface IHashtagProps {
	text: string
}

export const Hashtag: React.FC<IHashtagProps> = ({ text }) => (
	<div className="a-hashtag">
		<p className="a-hashtag__text">{text}</p>
	</div>
)
