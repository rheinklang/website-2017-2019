import { IDirectusImage } from './DirectusImage';
import { IDirectusModel } from './DirectusModel';

export interface IArticle extends IDirectusModel {
	author: string;
	timestamp: string;
	body: string;
	title: string;
	slug: string;
	image: IDirectusImage;
}
