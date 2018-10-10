import { ICrew } from '../schemes/Crew';
import directus from './shared/directus';

export const CrewAPI = {
	getCrew: () => directus.getItems<ICrew[]>('crew'),
};
