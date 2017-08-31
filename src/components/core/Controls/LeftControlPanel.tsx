import * as React from "react";
import { ControlButton, ServoPositionComponent } from "../../applications/index"

export class LeftControlPanelComponent extends React.Component<{}, {}> {
    constructor(props) {
        super(props);

        this.bindMethods();
    }

    public render() {
        return (
            <div className="left-control-panel">
                <div className="title">Servo control</div>

                <div className="joystick-group">
                    <ServoPositionComponent />
                    
                    <ControlButton
                        additionalClassName={"arrow left"}
                        buttonText={""}
                        isDisabled={false} />

                    <ControlButton
                        additionalClassName={"arrow up"}
                        buttonText={""}
                        isDisabled={false} />

                    <ControlButton
                        additionalClassName={"arrow right"}
                        buttonText={""}
                        isDisabled={false} />

                    <ControlButton
                        additionalClassName={"arrow down"}
                        buttonText={""}
                        isDisabled={false} />
                </div>

            </div>

        )
    }

    private bindMethods() {

    }
}