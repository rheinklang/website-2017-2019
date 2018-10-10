import { IAsset } from '../schemes/Asset';
import directus from './shared/directus';

export const AssetAPI = {
	getStaticAssets: () => directus.getItems<IAsset[]>('static_assets'),
};
