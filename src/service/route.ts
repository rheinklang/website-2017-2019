import { IRouteScheme } from '../schemes/Route';
import directus from './shared/directus';

export const RouteAPI = {
	getRoutes: () => directus.getItems<IRouteScheme[]>('routes'),
};
