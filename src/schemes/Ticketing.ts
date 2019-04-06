import { IDirectusModel } from './cms/DirectusModel';

export interface ITicketing extends IDirectusModel {
	ticket_shop_online: null | 1,
	enable_share_links: null | 1,
	coming_soon_text: string,
	embedd_frame?: string,
	payment_methods_text: string
}
