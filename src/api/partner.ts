import { IPartner } from '../schemes/Partner';
import api from './api';

export const PartnerAPI = {
	getPartners: () => api.getItems<IPartner[]>('partner'),
};
