import * as React from 'react';
import App from '../../../App';
import { configuration } from '../../../store';

export const Main: React.FC<{}> = () => <App configurationStore={configuration} />
