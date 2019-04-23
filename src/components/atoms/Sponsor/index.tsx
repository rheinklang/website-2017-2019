import * as React from 'react';
import * as ReactGA from 'react-ga';

import { IDirectusImage } from '../../../schemes/cms/DirectusImage';
import { PartnerPackageType } from '../../../schemes/Partner';
import { CMSImage } from '../CMSImage';

import './css/base.scss';

export interface ISponsorProps {
	name: string;
	image: IDirectusImage;
	link: string;
	tooltip: string;
	package: PartnerPackageType;
	primary: boolean;
}

function trackSponsorCrosslink(name: string) {
	return () => {
		ReactGA.event({
			action: `Click on Sponsor`,
			category: 'Sponsor',
			label: name
		});
	}
}

export const Sponsor = (props: ISponsorProps) => {
	const { link, name, image } = props;

	const classList = ['a-sponsor'];
	if (props.package) {
		classList.push(`a-sponsor--${props.package}`)
	}
	if (props.primary) {
		classList.push('a-sponsor--primary');
	}

	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className={classList.join(' ')}
			data-microtip-position="top" role="tooltip"
			aria-label={name}
			onClick={trackSponsorCrosslink(name)}
		>
			<CMSImage {...image} />
		</a>
	);
};
