import { IDirectusModel } from './cms/DirectusModel';

export interface IRawConfiguration extends IDirectusModel {
	key: string;
	value: string;
	comment: string;
}

export type EnvStatus = 'draft' | 'preview' | 'public' | 'na';

export interface IConfiguration {
	env: {
		host: string;
		maintenance: boolean;
		status: EnvStatus;
	};
	display: {
		tickets: boolean;
		foodAndDrinks: boolean;
		lineup: boolean;
		sponsors: boolean;
	};
}
