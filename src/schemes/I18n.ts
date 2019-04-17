import { IDirectusModel } from './cms/DirectusModel';

export interface IInternationalization extends IDirectusModel {
	key: string;
	value: string;
}
