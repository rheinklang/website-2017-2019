import { computed, observable, runInAction } from 'mobx';
import { ICrew } from '../schemes/Crew';
import { CrewAPI } from '../service/crew';

export class ArticleStore {
	@observable private articleList: ICrew[] = [];

	constructor(forceFetchAPI: boolean = false) {
		if (this.articleList.length === 0 || forceFetchAPI) {
			this.fetchCrew();
		}
	}

	@computed
	public get loaded(): boolean {
		return this.articleList.length > 0;
	}

	@computed
	public get partners(): ICrew[] {
		return this.articleList;
	}

	public async fetchCrew() {
		const crew = await CrewAPI.getCrew();

		runInAction(() => {
			this.articleList = crew.data;
		});
	}
}
