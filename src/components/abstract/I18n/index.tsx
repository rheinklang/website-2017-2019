import { observer } from 'mobx-react';
import * as React from 'react';

import { I18nStore } from '../../../store/I18nStore';

const store = new I18nStore();

interface IInternaltionalizationProps {
	label: string
}

@observer
export class I18n extends React.Component<IInternaltionalizationProps> {
	public render() {
		const labelDefinition = store.get(this.props.label);

		if (labelDefinition && Array.isArray(labelDefinition) && labelDefinition.length > 0) {
			return labelDefinition[0].value;
		}

		// tslint:disable-next-line:no-console
		// console.warn(`i18n: label for ${this.props.label} not found in`, store);
		return '';
	}
}
