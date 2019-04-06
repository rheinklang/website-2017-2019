import { IArticle } from '../schemes/Article';
import api from './api';

export const ArticlesAPI = {
	getArticles: () => api.getItems<IArticle[]>('articles'),
};
