const stringToValue = (value: any): string | number | boolean => {
	const mightBeNumber = parseFloat(value);

	if (!isNaN(mightBeNumber)) {
		return mightBeNumber;
	}

	if (value === 'true') {
		return true;
	}

	if (value === 'false') {
		return false;
	}

	return `${value}`;
};

export const parseDotNotation = (str: string, val: any, obj: object) => {
	let currentObj = obj;
	const keys = str.split('.');
	let i;
	const l = Math.max(1, keys.length - 1);
	let key;

	for (i = 0; i < l; ++i) {
		key = keys[i];
		currentObj[key] = currentObj[key] || {};
		currentObj = currentObj[key];
	}

	currentObj[keys[i]] = keys[i].indexOf('date') >= 0 ? val : stringToValue(val);
	delete obj[str];
};

export const dynamicJSONBuilder = <T extends object>(obj: object): T => {
	for (const key in obj) {
		if (key.indexOf('.') !== -1) {
			parseDotNotation(key, obj[key], obj);
		}
	}

	return obj as T;
};
