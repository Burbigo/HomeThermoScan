import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ThermoScanApp } from "./components/core/App/App"
import './assets/styles/main.scss';

ReactDOM.render(<ThermoScanApp />, document.querySelector('.app'));
