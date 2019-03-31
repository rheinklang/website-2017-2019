import * as React from 'react';
import { Icon } from '../../atoms/Icon';
import './css/base.scss';

export const SocialMediaLinks = () => {
	return (
		<React.Fragment>
			<ul className="m-social-media-links">
				<li className="m-social-media-links__entry">
					<a href="https://fb.me/rhnklng" target="_blank" rel="noopener noreferrer" title="Facebook">
						<Icon select="facebook" />
					</a>
				</li>
				<li className="m-social-media-links__entry">
					<a
						href="https://instagram.com/rheinklang"
						target="_blank"
						rel="noopener noreferrer"
						title="Instagram"
					>
						<Icon select="instagram" />
					</a>
				</li>
			</ul>
		</React.Fragment>
	);
};
