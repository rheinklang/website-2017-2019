export const formats: {
	RFC1738: string;
	RFC3986: string;
	default: string;
	formatters: {
		RFC1738: Function;
		RFC3986: Function;
	};
};
export function parse(str: any, opts: any): any;
export function stringify(object: any, opts: any): any;
