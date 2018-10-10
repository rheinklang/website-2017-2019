import { RouteReactID } from '../models/RouteStore';
import { IDirectusImage } from './DirectusImage';
import { IDirectusModel } from './DirectusModel';

export interface IRouteScheme extends IDirectusModel {
	slug: string;
	title: string;
	seo_title?: string;
	seo_description?: string;
	og_image?: IDirectusImage | null;
	hidden_service?: boolean;
	dynamic_route?: boolean;
	react_id: RouteReactID;
}
