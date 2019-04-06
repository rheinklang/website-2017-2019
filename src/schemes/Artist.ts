import { IDirectusImage } from './cms/DirectusImage';
import { IDirectusModel } from './cms/DirectusModel';

export interface IArtist extends IDirectusModel {
	name: string;
	genre: string;
	description: string;
	image: IDirectusImage;
	slug: string;
}
