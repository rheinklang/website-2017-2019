import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router } from './Router';

ReactDOM.render(<Router />, document.getElementById('root') as HTMLElement);

registerServiceWorker();

if ((module as any).hot) {
	(module as any).hot.accept();
}
