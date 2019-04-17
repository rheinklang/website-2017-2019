import { IDirectusModel } from './cms/DirectusModel';

export interface ISocialMedia extends IDirectusModel {
	name: string;
	label: string;
	url: string;
	asset: string;
}
