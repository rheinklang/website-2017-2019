import { IPartnerSchema } from '../schemes/Partner';
import directus from './shared/directus';

export const PartnerAPI = {
	getPartners: () => directus.getItems<IPartnerSchema[]>('partner'),
};
