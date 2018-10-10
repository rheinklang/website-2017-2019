import { action, computed, observable } from 'mobx';
import { IAsset } from 'src/schemes/Asset';
import { AssetAPI } from 'src/service/asset';

export class StaticAssetStore {
	@observable private assets: IAsset[] = [];

	constructor(forceFetchAPI: boolean = false) {
		if (this.assets.length === 0 || forceFetchAPI) {
			this.fetchAssets();
		}
	}

	public getAssetByName(name: string): IAsset | void {
		return computed(() => this.assets.find((asset: IAsset) => asset.name === name)).get();
	}

	@computed
	public get loaded() {
		return this.assets.length > 0;
	}

	@action.bound
	public async fetchAssets() {
		const response = await AssetAPI.getStaticAssets();
		this.assets = response.data;
	}
}
