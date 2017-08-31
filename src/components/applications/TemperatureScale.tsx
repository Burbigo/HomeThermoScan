import * as React from "react";
import { TemperatureGamma } from "../../enums/temperatureGamma"

export interface ITemperatureScaleProps {
    minTemperature: number;
    maxTemperature: number;
    temperatureGamma: TemperatureGamma;
}

const TemperatureScale: React.StatelessComponent<ITemperatureScaleProps> =
    (props: ITemperatureScaleProps) => {
        return <div className="temperature-scale"></div>
    };


export default TemperatureScale;