import * as React from "react";

export interface AppFooterProps {

}
export interface AppFooterState {
}

export class AppFooter extends React.Component<AppFooterProps, AppFooterState> {
    constructor(props) {
        super(props);

        this.bindMethods();
    }

    public render() {
        return (
            <div className="app-footer">
                <h1>Footer!!!</h1>

            </div>
        );
    }
    private bindMethods() {
    }
}
