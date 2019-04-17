export interface IDirectusMetaResponse {
	Deleted: number;
	Draft: number;
	Published: number;
	table: string;
	total: number;
	total_entries: number;
	type: string;
}

export interface IDirectusResponse<T = any> {
	meta: IDirectusMetaResponse;
	data: T;
}
