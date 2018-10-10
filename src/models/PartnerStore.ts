import { computed, observable, runInAction } from 'mobx';
import { IPartnerSchema } from '../schemes/Partner';
import { PartnerAPI } from '../service/partner';

export class PartnerStore {
	@observable private partnerList: IPartnerSchema[] = [];

	constructor(forceFetchAPI: boolean = false) {
		if (this.partnerList.length === 0 || forceFetchAPI) {
			this.fetchPartners();
		}
	}

	@computed
	public get loaded(): boolean {
		return this.partnerList.length > 0;
	}

	@computed
	public get partners(): IPartnerSchema[] {
		return this.partnerList;
	}

	public async fetchPartners() {
		const partners = await PartnerAPI.getPartners();

		runInAction(() => {
			this.partnerList = partners.data;
		});
	}
}
