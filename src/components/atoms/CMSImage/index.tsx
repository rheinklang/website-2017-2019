import * as React from 'react';

import { CMS_HOST } from '../../../config/cms';
import { IDirectusImage } from '../../../schemes/cms/DirectusImage';

export const CMSImage = (props: IDirectusImage) => (
	<img className="a-image a-image--cms" src={`${CMS_HOST}/${props.url}`} alt={props.title} />
)
