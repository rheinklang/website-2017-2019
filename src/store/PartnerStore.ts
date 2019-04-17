import { action, computed, observable } from 'mobx';
import { PartnerAPI } from '../api/partner';
import { IPartner } from '../schemes/Partner';

const INFINITE_TIMEOUT = 3;

export class PartnerStore {
	@observable private rawPartners: IPartner[] = [];
	private callCount = 0;

	constructor(forceFetchAPI: boolean = false) {
		if ((this.rawPartners.length === 0 || forceFetchAPI) && this.callCount < INFINITE_TIMEOUT) {
			this.fetchPartners();
		}
	}

	@computed.struct
	public get partners(): IPartner[] {
		return this.rawPartners;
	}

	@action.bound
	public async fetchPartners() {
		if (this.callCount >= INFINITE_TIMEOUT) {
			return;
		}

		if (this.rawPartners.length > 0) {
			return;
		}

		const rawPartners = await PartnerAPI.getPartners();
		if (!rawPartners || !rawPartners.data) {
			return;
		}

		this.rawPartners = rawPartners.data;
		this.callCount++;
	}
}
