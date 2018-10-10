import { IDirectusImage } from './DirectusImage';
import { IDirectusModel } from './DirectusModel';

export interface IArtist extends IDirectusModel {
	name: string;
	genre: string;
	description: string;
	image: IDirectusImage;
	slug: string;
}
