import { action, computed, observable } from 'mobx';
import { TicketingAPI } from '../api/ticketing';
import { ITicketing } from '../schemes/Ticketing';

const ticketingMock: ITicketing = {} as any;

export class TicketingStore {
	@observable private rawTicketing: ITicketing[] = [];

	constructor(forceFetchAPI: boolean = false) {
		if (this.rawTicketing.length === 0 || forceFetchAPI) {
			this.fetchTicketingInformation();
		}
	}

	public get paymentMethodsText() {
		return this.ticketing.payment_methods_text;
	}

	public get comingSoonText() {
		return this.ticketing.coming_soon_text;
	}

	public get embeddFrameContents() {
		return this.ticketing.embedd_frame;
	}

	public get areShareLinksEnabled() {
		return Boolean(this.ticketing.enable_share_links);
	}

	public get isTicketShopOnline() {
		return Boolean(this.ticketing.ticket_shop_online);
	}

	public get embeddFrameURL() {
		return this.ticketing.ticket_embedd_url;
	}

	public get loaded() {
		return Object.keys(this.ticketing).length > 0;
	}

	@action.bound
	public async fetchTicketingInformation() {
		const rawTicketing = await TicketingAPI.getTicketingInformation();
		if (!rawTicketing || !rawTicketing.data) {
			return;
		}

		this.rawTicketing = rawTicketing.data;
	}

	@computed
	private get ticketing(): ITicketing {
		return this.rawTicketing.shift() || ticketingMock;
	}
}
