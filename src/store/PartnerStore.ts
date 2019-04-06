import { action, computed, observable } from 'mobx';
import { PartnerAPI } from '../api/partner';
import { IPartner } from '../schemes/Partner';

export class PartnerStore {
	@observable private rawPartners: IPartner[] = [];

	constructor(forceFetchAPI: boolean = false) {
		if (this.rawPartners.length === 0 || forceFetchAPI) {
			this.fetchPartners();
		}
	}

	@computed.struct
	public get partners(): IPartner[] {
		return this.rawPartners;
	}

	@action.bound
	public async fetchPartners() {
		const rawPartners = await PartnerAPI.getPartners();
		if (!rawPartners || !rawPartners.data) {
			return;
		}

		this.rawPartners = rawPartners.data;
	}
}
