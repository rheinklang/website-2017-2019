import DirectusSDK from '@directus/sdk-js';
import PASSWORD from './password';

const client = new DirectusSDK();

client.login({
	email: 'office@rheinklang-festival.ch',
	password: PASSWORD,
	url: 'https://cms.rheinklang-festival.ch',
});

export { client };
