import { IDirectusModel } from './DirectusModel';

export interface IRouteScheme extends IDirectusModel {
	slug: string;
	title: string;
	seo_title: string;
	seo_description: string;
	og_image: any;
	hidden_service: boolean;
	dynamic_route: boolean;
}
