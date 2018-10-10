import { IDirectusImage } from './DirectusImage';
import { IDirectusModel } from './DirectusModel';
import { IDirectusResponse } from './DirectusResponse';

export interface IPartnerSchema extends IDirectusModel {
	homepage: string;
	name: string;
	identifier: string;
	slug: string;
	description: string;
	image: IDirectusResponse<IDirectusImage>;
}
