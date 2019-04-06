import { action, computed, observable } from 'mobx';
import { ConfigAPI } from '../api/configuration';
import { IConfiguration, IRawConfiguration } from '../schemes/Configuration';
import { dynamicJSONBuilder } from '../utils/dynamicJSONBuilder';

export class ConfigurationStore {
	@observable private configuration: IConfiguration | undefined;
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
		if (this.configuration) {
			return this.configuration.env;
		}

		return {
			host: window.location.host,
			maintenance: false,
			status: 'na',
		};
	}

	@computed.struct
	public get display(): IConfiguration['display'] {
		if (this.configuration) {
			return this.configuration.display;
		}

		return {
			foodAndDrinks: false,
			lineup: false,
			sponsors: false,
			tickets: false,
		};
	}

	@computed.struct
	public get countdown(): IConfiguration['countdown'] {
		if (this.configuration) {
			return this.configuration.countdown;
		}

		return {
			date: '',
			visible: false,
		};
	}

	@action.bound
	public async fetchConfiguration() {
		const rawConfig = await ConfigAPI.getConfig();
		if (!rawConfig || !rawConfig.data) {
			return;
		}

		let config = rawConfig.data.reduce((prev: object, curr: IRawConfiguration) => {
			prev[curr.key] = curr.value;
			return prev;
		}, {});

		config = dynamicJSONBuilder<IConfiguration>(config);

		this.rawConfiguration = rawConfig.data;
		this.configuration = config as IConfiguration;
	}
}
