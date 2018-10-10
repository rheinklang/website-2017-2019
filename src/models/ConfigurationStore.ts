import { action, computed, observable } from 'mobx';
import { ConfigAPI } from 'src/service/configuration';
import { IConfiguration, IRawConfiguration } from '../schemes/Configuration';
import { dynamicJSONBuilder } from '../utils/dynamicJSONBuilder';

export class ConfigurationStore {
	@observable private configuration: IConfiguration;
	@observable private rawConfiguration: IRawConfiguration[] = [];

	constructor(forceFetchAPI: boolean = false) {
		if (this.rawConfiguration.length === 0 || forceFetchAPI) {
			this.fetchConfiguration();
		}
	}

	@computed
	public get loaded(): boolean {
		return Boolean(this.configuration);
	}

	@computed.struct
	public get env(): IConfiguration['env'] {
		return this.configuration.env;
	}

	@computed.struct
	public get display(): IConfiguration['display'] {
		return this.configuration.display;
	}

	@action.bound
	public async fetchConfiguration() {
		const rawConfig = await ConfigAPI.getConfig();
		const config = rawConfig.data.reduce((prev: object, curr: IRawConfiguration) => {
			prev[curr.key] = curr.value;
			return prev;
		}, {});

		dynamicJSONBuilder<IConfiguration>(config);

		this.rawConfiguration = rawConfig.data;
		this.configuration = config as IConfiguration;
	}
}
