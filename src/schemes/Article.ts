import { IDirectusImage } from './cms/DirectusImage';
import { IDirectusModel } from './cms/DirectusModel';
import { IDirectusResponse } from './cms/DirectusResponse';

export interface IArticle extends IDirectusModel {
	author: string;
	timestamp: string;
	body?: string;
	excerpt: string;
	invert_colors: 'yes' | 'no';
	title: string;
	slug: string;
	image: IDirectusResponse<IDirectusImage>;
}
