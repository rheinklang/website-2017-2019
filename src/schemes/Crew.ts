import { IDirectusImage } from './DirectusImage';
import { IDirectusModel } from './DirectusModel';

export interface ICrew extends IDirectusModel {
	name: string;
	role: string;
	leader: boolean;
	image: IDirectusImage;
}
