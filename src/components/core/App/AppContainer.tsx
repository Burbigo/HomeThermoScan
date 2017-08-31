import * as React from "react";

import TemperatureScale from "../../applications/TemperatureScale";
import { TemperatureGamma } from "../../../enums/temperatureGamma"

import {
    ThermoImageComponent, RightControlPanelComponent,
    LeftControlPanelComponent
} from "../"

export interface AppContainerProps {

}
export interface AppContainerState {
}

export class AppContainer extends React.Component<AppContainerProps, AppContainerState> {
    constructor(props) {
        super(props);

        this.bindMethods();
    }

    public render() {
        return (
            <div className="app-container">
                <LeftControlPanelComponent />
                
                <ThermoImageComponent />

                <RightControlPanelComponent />

                <TemperatureScale
                    minTemperature={0}
                    maxTemperature={100}
                    temperatureGamma={TemperatureGamma.warm} />

            </div>
        );
    }
    private bindMethods() {
    }
}
