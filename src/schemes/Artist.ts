import { IDirectusImage } from './cms/DirectusImage';
import { IDirectusModel } from './cms/DirectusModel';

export interface IArtist extends IDirectusModel {
	name: string;
	genre: string;
	sub_artists: string;
	description: string;
	location: string;
	image: IDirectusImage;
	slug: string;
}
