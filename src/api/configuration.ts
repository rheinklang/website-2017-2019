import { IRawConfiguration } from '../schemes/Configuration';
import api from './api';

export const ConfigAPI = {
	getConfig: () => api.getItems<IRawConfiguration[]>('configuration'),
};
