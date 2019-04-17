import { IInternationalization } from '../schemes/I18n';
import api from './api';

export const I18nAPI = {
	getLabels: () => api.getItems<IInternationalization[]>('i18n'),
};
