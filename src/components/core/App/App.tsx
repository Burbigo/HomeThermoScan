import * as React from "react";

import { AppContainer, AppHeader, AppFooter } from "./";

export interface ThermoScanAppProps {

}
export interface ThermoScanAppState {
}

export class ThermoScanApp extends React.Component<ThermoScanAppProps, ThermoScanAppState> {
    constructor(props) {
        super(props);

        this.bindMethods();
    }

    public render() {
        return (
            <div className="root-container">
                <AppHeader />

                <AppContainer />

                <AppFooter />
            </div>
        );
    }
    private bindMethods() {
    }
}
