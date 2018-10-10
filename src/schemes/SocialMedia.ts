import { IDirectusModel } from './DirectusModel';

export interface ISocialMedia extends IDirectusModel {
	name: string;
	label: string;
	url: string;
	asset: string;
}
