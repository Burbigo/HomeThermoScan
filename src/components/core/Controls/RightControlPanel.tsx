import * as React from "react";
import ControlButton from "../../applications/ControlButton"

export class RightControlPanelComponent extends React.Component<{}, {}> {
    constructor(props) {
        super(props);

        this.bindMethods();
    }

    public render() {
        return (
            <div className="control-panel">
                <ControlButton
                    additionalClassName={"control"}
                    buttonText={"Start capture process"}
                    isDisabled={false} />

                <ControlButton
                    additionalClassName={"control"}
                    buttonText={"Stop capture process"}
                    isDisabled={false} />

                <ControlButton
                    additionalClassName={"control"}
                    buttonText={"Save image"}
                    isDisabled={true} />

                <ControlButton
                    additionalClassName={"control"}
                    buttonText={"Change color gamma"}
                    isDisabled={false} />

            </div>

        )
    }

    private bindMethods() {

    }
}