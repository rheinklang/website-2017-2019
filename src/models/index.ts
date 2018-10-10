import { ConfigurationStore } from './ConfigurationStore';
import { PartnerStore } from './PartnerStore';
import { RouteStore } from './RouteStore';
import { StaticAssetStore } from './StaticAssetStore';

export const partnerStore = new PartnerStore();
export const routeStore = new RouteStore();
export const configurationStore = new ConfigurationStore();
export const assetStore = new StaticAssetStore();
