import { IDirectusImage } from './DirectusImage';
import { IDirectusModel } from './DirectusModel';
import { IDirectusResponse } from './DirectusResponse';

export interface IAsset extends IDirectusModel {
	name: string;
	alt: string;
	title: string;
	blob: IDirectusResponse<IDirectusImage>;
}
