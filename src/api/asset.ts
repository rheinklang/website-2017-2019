import { IAsset } from '../schemes/Asset';
import api from './api';

export const AssetAPI = {
	getStaticAssets: () => api.getItems<IAsset[]>('static_assets'),
};
