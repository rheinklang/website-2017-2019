import axios, { AxiosError, AxiosResponse } from 'axios';
import { stringify } from 'qs';
import { IDirectusResponse } from '../../schemes/DirectusResponse';

interface IRemoteInstanceOptions {
	accessToken: string;
	url: string;
	accessTokenType?: string;
	headers?: {
		[key: string]: string;
	};
	version?: string;
	maxFileSize: number;
}

interface IDirectusAuthResponse {
	success: boolean;
	data: {
		token: string;
	};
}

interface IRemoteError {
	response: {
		data: any;
	};
}

const customHttpClient = axios.create({
	responseType: 'json',
	withCredentials: true,
});

customHttpClient.interceptors.response.use(
	(res: AxiosResponse<any>) => res,
	(error: AxiosError) => {
		if (error.response) {
			throw new Error(`${error.response.statusText} (${error.response.status})`);
		}

		// tslint:disable-next-line
		console.warn(
			`${(error.config.method || 'unknown').toUpperCase()} ${error.config.url} (withCredentials: ${
				error.config.withCredentials
			})`
		);

		return error.response;
	}
);

export const DEFAULT_REMOTE_OPTIONS: IRemoteInstanceOptions = {
	accessToken: 'undefined',
	accessTokenType: 'header',
	headers: {},
	maxFileSize: 10e5,
	url: 'http://localhost',
	version: '1.1',
};

class RemoteInstance {
	private accessToken: string | null;
	private url: string;
	private accessTokenType?: string;
	private headers?: {
		[key: string]: string;
	};
	private maxFileSize: number;

	private base: string;
	private api: string;

	constructor(options: IRemoteInstanceOptions = DEFAULT_REMOTE_OPTIONS) {
		const { accessToken, accessTokenType, headers, maxFileSize, version } = options;
		let { url } = options;

		this.accessToken = accessToken;
		this.accessTokenType = accessTokenType;
		this.headers = headers;
		this.maxFileSize = maxFileSize;

		// TEMP FIX FOR BACKWARD COMPATIBILTY
		url = url.replace('/api/1.1', '');

		this.base = url.replace(/\/+$/, '');
		this.api = `${this.base}/api/`;
		this.url = `${this.api}${version}/`;
	}

	// Authentication
	// -------------------------------------------
	public authenticate(email: string, password: string) {
		return new Promise<IDirectusAuthResponse>((resolve, reject) => {
			this.post('auth/request-token', { email, password })
				.then((res: any) => {
					const castedSpecialRes = res as IDirectusAuthResponse;

					if (castedSpecialRes.success) {
						this.accessToken = castedSpecialRes.data.token;
						return resolve(castedSpecialRes);
					}

					return reject(castedSpecialRes);
				})
				.catch(err => reject(err));
		});
	}

	public deauthenticate() {
		this.accessToken = null;
	}

	// Items
	// ----------------------------------------------------------------------------------
	public createItem<T>(table: string, data: any = {}, params: any = {}) {
		return this.post<T>(`tables/${table}/rows`, data, params);
	}

	public getItems<T>(table: string, params: any = {}) {
		return this.get<T>(`tables/${table}/rows`, params);
	}

	public getItem<T>(table: string, id: string, params = {}) {
		return this.get<T>(`tables/${table}/rows/${id}`, params);
	}

	public updateItem<T>(table: string, id: string, data: object, params: object = {}) {
		return this.put<T>(`tables/${table}/rows/${id}`, data, false, params);
	}

	public deleteItem<T>(table: string, id: string, params: object = {}) {
		return this.delete<T>(`tables/${table}/rows/${id}`, {}, false, params);
	}

	public createBulk(table: string, data: object) {
		if (Array.isArray(data) === false) {
			throw new TypeError(`Parameter data should be an array of objects`);
		}

		return this.post(`tables/${table}/rows/bulk`, {
			rows: data,
		});
	}

	public updateBulk(table: string, data: object) {
		if (Array.isArray(data) === false) {
			throw new TypeError(`Parameter data should be an array of objects`);
		}

		return this.put(`tables/${table}/rows/bulk`, {
			rows: data,
		});
	}

	public deleteBulk(table: string, data: object) {
		if (Array.isArray(data) === false) {
			throw new TypeError(`Parameter data should be an array of objects`);
		}

		return this.delete(`tables/${table}/rows/bulk`, {
			rows: data,
		});
	}

	// Files
	// ----------------------------------------------------------------------------------
	public getFiles(params: object = {}) {
		return this.get('files', params);
	}

	public getFile(id: string) {
		return this.get(`files/${id}`);
	}

	// Tables
	// ----------------------------------------------------------------------------------
	public getTables(params = {}) {
		return this.get('tables', params);
	}

	public getTable(table: string, params = {}) {
		return this.get(`tables/${table}`, params);
	}

	// Columns
	// ----------------------------------------------------------------------------------
	public getColumns(table: string, params = {}) {
		return this.get(`tables/${table}/columns`, params);
	}

	public getColumn(table: string, column: string) {
		return this.get(`tables/${table}/columns/${column}`);
	}

	// API apiEndpoints
	// ----------------------------------------------------------------------------------
	public getApi(apiapiEndpoint: string, params = {}) {
		return this.get(apiapiEndpoint, params, true);
	}

	public postApi(apiapiEndpoint: string, data: object, params = {}) {
		return this.post(apiapiEndpoint, data, params, true);
	}

	public putApi(apiapiEndpoint: string, data: object) {
		return this.put(apiapiEndpoint, data, true);
	}

	public deleteApi(apiapiEndpoint: string, data: object) {
		return this.delete(apiapiEndpoint, data, true);
	}

	// Hash
	// ----------------------------------------------------------------------------------
	public getHash(str: string, data: object = {}) {
		return this.post('hash', data);
	}

	// Random
	// ----------------------------------------------------------------------------------
	public getRandom(params = {}) {
		return this.post('random', {}, params);
	}

	public setAccessTokenParam(params: { access_token: string }) {
		if (this.accessToken && this.accessTokenType === 'parameter') {
			params.access_token = this.accessToken;
		}
	}

	private get requestHeaders() {
		const headers: any = { ...this.headers };

		if (this.accessToken && this.accessTokenType === 'header') {
			headers.Authorization = 'Bearer ' + this.accessToken;
		}

		return headers;
	}

	private onCaughtError(reject: (err: any) => void, err: IRemoteError) {
		if (err.response && err.response.data) {
			return reject(err.response.data);
		}

		return reject(err);
	}

	private get<T>(apiEndpoint: string, params: object = {}, isAPI: boolean = false) {
		const headers = this.requestHeaders;
		const url = isAPI ? this.api : this.url;

		this.setAccessTokenParam(params as any);

		return new Promise<IDirectusResponse<T>>((resolve: (...args: any[]) => any, reject: () => void) => {
			customHttpClient
				.get(url + apiEndpoint, {
					headers,
					params,
					paramsSerializer: paramList =>
						stringify(paramList, {
							arrayFormat: 'brackets',
							encode: false,
						}),
				})
				.then(res => resolve(res ? res.data : {}))
				.catch(err => this.onCaughtError(reject, err));
		});
	}

	private post<T>(apiEndpoint: string, data: object = {}, params: object = {}, isAPI: boolean = false) {
		const headers = this.requestHeaders;
		const url = isAPI ? this.api : this.url;

		this.setAccessTokenParam(params as any);

		return new Promise<IDirectusResponse<T>>((resolve, reject) => {
			customHttpClient
				.post(url + apiEndpoint, data, {
					headers,
					maxContentLength: this.maxFileSize,
					params,
				})
				.then(res => resolve(res.data))
				.catch(err => this.onCaughtError(reject, err));
		});
	}

	private put<T>(apiEndpoint: string, data: object = {}, isAPI: boolean = false, params: object = {}) {
		const headers = this.requestHeaders;
		const url = isAPI ? this.api : this.url;

		this.setAccessTokenParam(params as any);

		return new Promise<IDirectusResponse<T>>((resolve, reject) => {
			customHttpClient
				.put(url + apiEndpoint, data, {
					headers,
					maxContentLength: this.maxFileSize,
					params,
				})
				.then(res => resolve(res.data))
				.catch(err => this.onCaughtError(reject, err));
		});
	}

	private delete<T>(apiEndpoint: string, data: object = {}, isAPI: boolean = false, params: object = {}) {
		const headers = this.requestHeaders;
		const url = isAPI ? this.api : this.url;

		this.setAccessTokenParam(params as any);

		return new Promise<IDirectusResponse<T>>((resolve, reject) => {
			customHttpClient
				.delete(url + apiEndpoint, { headers, data, params })
				.then(res => resolve(res.data))
				.catch(err => this.onCaughtError(reject, err));
		});
	}
}

export { RemoteInstance };

const defaultRemoteConnection = new RemoteInstance({
	accessToken: '99QW5PGooTCIGIYXzZPpkO45LSbe2mAR',
	accessTokenType: 'header',
	maxFileSize: 10e10,
	url: 'https://cms.rheinklang-festival.ch',
	version: '1.1',
});

// tslint:disable-next-line
console.log(defaultRemoteConnection);

export default defaultRemoteConnection;
