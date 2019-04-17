import { action, computed, IComputedValue, observable } from 'mobx';
import { I18nAPI } from '../api/i18n';
import { IInternationalization } from '../schemes/I18n';

export class I18nStore {
	@observable private rawI18n: IInternationalization[] = [];
	private labelsByKeyCacheMap = new Map<string, IComputedValue<IInternationalization[]>>();

	constructor(forceFetchAPI: boolean = false) {
		if (this.rawI18n.length === 0 || forceFetchAPI) {
			this.fetchI18n();
		}
	}

	public get(key: string): IInternationalization[] | undefined {
		if (this.labelsByKeyCacheMap.has(key)) {
			return this.labelsByKeyCacheMap.get(key)!.get();
		}

		const computedLabels = computed(() => this.rawI18n.filter(label => label.key === key));
		this.labelsByKeyCacheMap.set(key, computedLabels);
		return this.labelsByKeyCacheMap.get(key)!.get();
	}

	@action.bound
	public async fetchI18n() {
		const rawI18n = await I18nAPI.getLabels();
		if (!rawI18n || !rawI18n.data) {
			return;
		}

		this.rawI18n = rawI18n.data;
	}
}
