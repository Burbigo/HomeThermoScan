import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ThermoScanApp } from "./components/App"
import './assets/styles/main.scss';

ReactDOM.render(<ThermoScanApp />, document.querySelector('.app'));
