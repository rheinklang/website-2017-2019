import { IDirectusModel } from './DirectusModel';

export interface IRawConfiguration extends IDirectusModel {
	key: string;
	value: string;
	comment: string;
}

export interface IConfiguration {
	env: {
		host: string;
		maintenance: boolean;
		status: 'draft' | 'preview' | 'public';
	};
	display: {
		tickets: boolean;
		foodAndDrinks: boolean;
		lineup: boolean;
	};
}
