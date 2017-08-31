import * as React from "react";

export interface IControlButton {
    isDisabled: boolean;
    additionalClassName: string;
    buttonText: string;
}

const ControlButton: React.StatelessComponent<IControlButton> =
    (props: IControlButton) => {
        return <button className={"button " + props.additionalClassName}
            disabled={props.isDisabled}>
            {props.buttonText}
        </button>
    };


export default ControlButton;