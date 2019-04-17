import { action, computed, observable } from 'mobx';
import { ArticlesAPI } from '../api/articles';
import { IArticle } from '../schemes/Article';

export class ArticlesStore {
	@observable private rawArticles: IArticle[] = [];

	constructor(forceFetchAPI: boolean = false) {
		if (this.rawArticles.length === 0 || forceFetchAPI) {
			this.fetchArticles();
		}
	}

	@computed
	public get loaded(): boolean {
		return this.rawArticles && this.rawArticles.length > 0;
	}

	@computed.struct
	public get articles(): IArticle[] {
		return this.rawArticles;
	}

	@action.bound
	public async fetchArticles() {
		const rawArticles = await ArticlesAPI.getArticles();
		if (!rawArticles || !rawArticles.data) {
			return;
		}

		this.rawArticles = rawArticles.data;
	}
}
