import { computed, observable, runInAction } from 'mobx';
import { IDirectusMetaResponse } from '../schemes/DirectusResponse';
import { IRouteScheme } from '../schemes/Route';
import { RouteAPI } from '../service/route';

export enum RouteReactID {
	HOME = 'home',
	CREW_BY_ID = 'crew-by-id',
	LINK_TO = 'link-to',
	ABOUT_US = 'about-us',
	PARTNER_BY_ID = 'partner-by-id',
	NEWSLETTER = 'newlsetter',
	CONTACT = 'contact',
	IMPRESSIONS = 'impressions',
	IMPRESSION_BY_ID = 'impression-by-id',
	ERROR = 'error',
}

export class RouteStore {
	@observable private routeList: IRouteScheme[] = [];
	@observable private metaData: IDirectusMetaResponse;

	constructor(forceFetchAPI: boolean = false) {
		if (this.routeList.length === 0 || forceFetchAPI) {
			this.fetchRoutes();
		}
	}

	@computed
	public get loaded(): boolean {
		return this.routeList.length > 0;
	}

	@computed
	public get meta(): IDirectusMetaResponse {
		return this.metaData;
	}

	public getRouteByID(id: RouteReactID): IRouteScheme {
		return (
			this.routeList.find((route: IRouteScheme) => route.react_id === id) || {
				dynamic_route: false,
				hidden_service: false,
				id: 'not-found',
				og_image: null,
				react_id: RouteReactID.ERROR,
				seo_description: '',
				seo_title: 'Not found',
				slug: '/error',
				sort: 0,
				status: 0,
				title: 'Not found',
			}
		);
	}

	@computed
	public get routes(): IRouteScheme[] {
		return this.routeList;
	}

	public async fetchRoutes() {
		const routes = await RouteAPI.getRoutes();
		// tslint:disable-next-line
		console.log('routes', routes.data);

		runInAction(() => {
			this.routeList = routes.data;
			this.metaData = routes.meta;
		});
	}
}
