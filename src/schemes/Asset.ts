import { IDirectusImage } from './cms/DirectusImage';
import { IDirectusModel } from './cms/DirectusModel';
import { IDirectusResponse } from './cms/DirectusResponse';

export interface IAsset extends IDirectusModel {
	name: string;
	alt: string;
	title: string;
	blob: IDirectusResponse<IDirectusImage>;
}
