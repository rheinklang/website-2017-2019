import { computed, observable, runInAction } from 'mobx';
import { ICrew } from '../schemes/Crew';
import { CrewAPI } from '../service/crew';

export class CrewStore {
	@observable private crewList: ICrew[] = [];

	constructor(forceFetchAPI: boolean = false) {
		if (this.crewList.length === 0 || forceFetchAPI) {
			this.fetchCrew();
		}
	}

	@computed
	public get loaded(): boolean {
		return this.crew.length > 0;
	}

	@computed
	public get crew(): ICrew[] {
		return this.crew;
	}

	public async fetchCrew() {
		const crew = await CrewAPI.getCrew();

		runInAction(() => {
			this.crewList = crew.data;
		});
	}
}
