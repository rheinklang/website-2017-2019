import axios from 'axios';
import { LOGDNA_KEY } from '../env';

export const LogDnaAPI = {
	postLog: (data: object) => {
		const generatedURL = [
			'https://logs.logdna.com/logs/ingest',
			`?hostname=${document.location.hostname}`,
			`&mac=unknown`,
			`&ip=unknown`,
			`&now=${Date.now()}`
		].join('');

		return axios.post(generatedURL, JSON.stringify(data), {
			auth: {
				password: '',
				username: LOGDNA_KEY,
			}
		});
	}
}
