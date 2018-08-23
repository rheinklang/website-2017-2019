import { IDirectusResponse } from '../../service/shared/directus';
import { IDirectusImage } from './DirectusImage';
import { IDirectusModel } from './DirectusModel';

export interface IPartner extends IDirectusModel {
	homepage: string;
	name: string;
	identifier: string;
	slug: string;
	description: string;
	image: IDirectusResponse<IDirectusImage>;
}
