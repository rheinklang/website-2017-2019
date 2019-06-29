import DirectusSDK from '@directus/sdk-js';
import { DIRECTUS_PASSWORD, DIRECTUS_USER } from '../env';

const client = new DirectusSDK();

client.login({
	email: DIRECTUS_USER,
	password: DIRECTUS_PASSWORD,
	url: 'https://cms.rheinklang-festival.ch',
});

export { client };
