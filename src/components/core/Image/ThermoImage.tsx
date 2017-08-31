import * as React from "react";

export class ThermoImageComponent extends React.Component<{}, {}> {
    constructor(props) {
        super(props);

        this.bindMethods();
    }

    public render() {
        return (
            <div className="image-view-port">
                <img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/potw1735a.jpg"
                 onClick={this.onThermoImageClick} />
            </div>
        )
    }

    private bindMethods() {
        this.onThermoImageClick = this.onThermoImageClick.bind(this);
        this.showTemperature = this.showTemperature.bind(this);
    }

    private onThermoImageClick(e: React.MouseEvent<HTMLImageElement>) {
        let clickX = e.clientX;
        let clickY = e.clientY;

        this.showTemperature(clickX, clickY);
    }

    private showTemperature(x: number, y: number) {
        console.log(`X => ${x} and Y => ${y}`);
    }
}