import { IRawConfiguration } from 'src/schemes/Configuration';
import directus from './shared/directus';

export const ConfigAPI = {
	getConfig: () => directus.getItems<IRawConfiguration[]>('configuration'),
};
