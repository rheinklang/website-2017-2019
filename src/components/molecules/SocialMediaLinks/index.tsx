import * as React from 'react';
import * as ReactGA from 'react-ga';
import { Icon } from '../../atoms/Icon';
import './css/base.scss';

function trackSocialMediaInteractionHandler(name: string) {
	return () => {
		ReactGA.event({
			action: `Click on Link `,
			category: 'Social',
			label: name
		});
	}
}

export const SocialMediaLinks = () => {
	return (
		<React.Fragment>
			<ul className="m-social-media-links">
				<li className="m-social-media-links__entry">
					<a
						href="https://fb.me/rhnklng"
						target="_blank"
						rel="noopener noreferrer"
						title="Facebook"
						onClick={trackSocialMediaInteractionHandler('Facebook')}
					>
						<Icon select="facebook2" />
					</a>
				</li>
				<li className="m-social-media-links__entry">
					<a
						href="https://instagram.com/rheinklang"
						target="_blank"
						rel="noopener noreferrer"
						title="Instagram"
						onClick={trackSocialMediaInteractionHandler('Instagram')}
					>
						<Icon select="instagram" />
					</a>
				</li>
			</ul>
		</React.Fragment>
	);
};

export default SocialMediaLinks;
