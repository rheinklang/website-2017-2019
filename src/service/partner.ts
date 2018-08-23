import { IPartner } from '../models/schemes/Partner';
import directus from './shared/directus';

export const PartnerAPI = {
	getPartners: () => directus.getItems<IPartner[]>('partner'),
};
