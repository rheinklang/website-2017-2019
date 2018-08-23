import { computed, observable, runInAction } from 'mobx';
import { PartnerAPI } from '../service/partner';
import { IPartner } from './schemes/Partner';

export class PartnerStore {
	@observable private partnerList: IPartner[] = [];

	constructor() {
		this.fetchPartners();
	}

	@computed
	public get partners(): IPartner[] {
		return this.partnerList;
	}

	public async fetchPartners() {
		const partners = await PartnerAPI.getPartners();

		runInAction(() => {
			this.partnerList = partners.data;
		});
	}
}
