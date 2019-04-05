import * as React from 'react';
import { createDeepLink } from '../../../helper/deeplink';
import { Icon } from '../../atoms/Icon';
import './css/socialshare.scss';

interface ISocialShareProps {
	url: string,
	text: string
}

const TOOLTIP_POSITION = 'bottom';

export const SocialShare = (props: ISocialShareProps) => {
	return (
		<div className="m-social-share">
			<ul className="m-social-share__list">
				<li className="is-hidden-desktop">
					<a rel="noopener, noreferrer"
						href={createDeepLink('whatsapp', 'send', {
							text: props.text
						})}
						data-microtip-position={TOOLTIP_POSITION}
						role="tooltip"
						aria-label="WhatsApp"
					>
						<Icon select="whatsapp" appendClass="w-tickets__share-whatsapp" />
					</a>
				</li>
				<li className="is-hidden-mobile is-hidden-tablet-only is-hidden-touch">
					<a
						rel="noopener, noreferrer"
						target="_blank"
						href={`https://web.whatsapp.com/send?text=${props.text}`}
						data-microtip-position="bottom"
						role="tooltip"
						aria-label="WhatsApp"
					>
						<Icon select="whatsapp" appendClass="w-tickets__share-whatsapp" />
					</a>
				</li>
				<li>
					<a
						rel="noopener, noreferrer"
						target="_blank"
						href={`https://www.facebook.com/sharer/sharer.php?u=${props.url}&src=rheinklang-website`} className="fb-xfbml-parse-ignore"
						data-microtip-position={TOOLTIP_POSITION}
						role="tooltip"
						aria-label="Facebook"
					>
						<Icon select="facebook" />
					</a>
				</li>
				<li>
					<a
						rel="noopener, noreferrer"
						target="_blank"
						href={`https://www.facebook.com/dialog/send?app_id=2235801346686930&link=${props.url}`} className="fb-xfbml-parse-ignore"
						data-microtip-position={TOOLTIP_POSITION}
						role="tooltip"
						aria-label="Messenger"
					>
						<Icon select="messenger" />
					</a>
				</li>
			</ul>
		</div>
	);
};

SocialShare.displayName = 'SocialShare';
