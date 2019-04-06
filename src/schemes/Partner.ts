import { IDirectusImage } from './cms/DirectusImage';
import { IDirectusModel } from './cms/DirectusModel';
import { IDirectusResponse } from './cms/DirectusResponse';

export interface IPartner extends IDirectusModel {
	homepage: string;
	name: string;
	identifier: string;
	slug?: string;
	description?: string;
	image: IDirectusResponse<IDirectusImage>;
	is_primary: null | 1;
	tooltip: string
}
